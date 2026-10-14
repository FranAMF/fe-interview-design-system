# Tabs — Design System Component

Hola! 😊

This is a reusable and responsive Tabs component built with React, TypeScript, and SCSS as part of a frontend technical assessment.
The component supports Pill and Underline variants, optional status badges, and accessible tab semantics.

# Technical Decisions

I decided to keep the implementation simple and easy to follow. Instead of using a compound component pattern, I went with an items-based approach where the Tabs component handles the state and rendering internally. For this particular use case, I felt it was a more straightforward solution without adding unnecessary complexity.

I also chose not to create a separate constants file. There are only a few values that I would normally extract (such as NEGATIVE, POSITIVE ... ), so I didn't feel it was necessary at this stage. In a larger project, I would probably organize these differently.

In general, I prefer keeping things as simple as possible. I find that straightforward code is usually easier to understand, maintain, and extend when requirements change.

# Storybook
pnpm storybook

# Testing
pnpm test

