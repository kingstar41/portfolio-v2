---
title: "How to Use GitHub Issues to Add a Comment Section to Your Next.js Site"
date: "2025-03-16"
category: "Code"
tags: ["Popover", "Web API", "Popover API"]
---

A blog isn't really a blog without a comment section. Without the ability to comment, a blog feels like a Web 1.0 throwback where the reader has no ability to interact with the content they're reading.

However, implementing one might feel like hard work. Setting up a database to store comments, hooking up the API, and integrating them into your site might not be all that complicated, but it takes time (that you might not have).

So, when it came to adding a comment section to this blog - scroll to the bottom, it's there, I promise! - I decided to see if there was a simple solution that didn't require a whole load of management or maintenance, and I came across [Giscus](https://giscus.app), a super-simple open source comments system built powered by GitHub discussions.

## Preparing your Repo

> Note: The repo you use **must** be public and commenters are required to log in to their GitHub account to leave a comment.

Giscus manages the comments on your blog by storing them on a GitHub repo under the Discussions tab. In order to enable this feature, we need to switch Discussions on.

Navigate to your chosen repo, go to `Settings` and `Discussions` and switch discussions on.

## Install Giscus on Github

In order for Giscus to work, you ned to install it as an extension on GitHub. To do so:

- Head to the Giscus [GitHub app page](https://github.com/apps/giscus)
- Click the `install` button.
- Decide whether to install on all repositories or just one (recommended)

## Configure Your Comment System

The creators of Giscus have done an incredible job of making a simple UI component that lets you verify you have configured your repository correctly, and get some props and details we'll need in the next step.

There are a few steps to complete, but it's essentially:

- Go to [Giscus.app](https://giscus.app/) and enter your repository name (ie `john-smith/portfolio-site`)
- Choose a file structure (ie do you want GitHub discussion file names to match the slug of the post they are connected to?)
- Select a theme (which can be overriden with CSS)

> Do not close this window, you will need some of the information included in the script tag later

## Adding Giscus to your Code

Okay now the basic configuration is complete, we're going to install the Giscus React-specific npm package:

```zsh
npm i @giscus/react
```

It's important to say that this step is not featured in the docs, as they were mostly written for HTML-based sites. The docs show a script tag, but as we're using Next.js we will opt for the Giscus component included in the `giscus/react` package.

To do this, we will create a new file called `CommentSection.js/.ts`, and let's begin by creating a simple client component, importing the Giscus component and just a simple `h3`:

```javascript
"use client";
import Giscus from "@giscus/react";

export default function CommentsSection() {
  return <h3>Comments</h3>;
}
```

Next, let's add the Giscus component, and let's include the props from the script component given during configuration.

We will now convert them to JSX, by removing `data-` from the beginning of the prop names, and of course converting them into camelcase.

```typescript
<Giscus
  id="comments"
  repo="person/portfolio" // Verify this on Giscus.app
  repoId="R_kgKLOrVhEf="
  category="Announcements"
  categoryId="DIC_kwOLIrHhVs5CnvWF"
  mapping="pathname"
  term="Welcome to @giscus/react component!"
  reactionsEnabled="1"
  emitMetadata="0"
  inputPosition="top"
  theme="transparent_dark"
  lang="en"
  loading="lazy"
/>
```

...And we're done! 🥳

Now at this stage I would usually include an image showing you how it looks when it's finished, but you're only a few pixels away from a real-world example. So, scroll down, give it a go, leave a reaction or let me know your thoughts in the (Giscus) comments.
