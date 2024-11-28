import { BlogPost } from "../types/Blog";

export async function getHashnodeArticles() {
  const query = `
    query Publication {
      publication(host: "danielcranney.hashnode.dev") {
        posts(first: 12) {
          edges {
            node {
              title
              brief
              slug
              publishedAt
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();

    if (json.errors) {
      console.error("Hashnode API Error:", json.errors);
      return [];
    }

    if (!json.data?.publication?.posts?.edges) {
      console.error("Unexpected API response structure:", json);
      return [];
    }

    // Transform the response to match our BlogPost type
    return json.data.publication.posts.edges.map((edge: any) => ({
      title: edge.node.title,
      brief: edge.node.brief,
      slug: edge.node.slug,
      dateAdded: edge.node.publishedAt,
      coverImage: edge.node.coverImage?.url || "",
    })) as BlogPost[];
  } catch (error) {
    console.error("Error fetching Hashnode articles:", error);
    return [];
  }
}
