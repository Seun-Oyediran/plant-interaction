1. abstracts contains no actual styles, just Sass mechanisms that help define styles in other directories (sometimes called "helpers"). This includes things like global variables, functions, and mixins. Each of these categories should be placed in their own appropriately-named partial file, as seen above.

2. base contains boilerplate used throughout an entire si te. This includes project-wide typography styles, and stylesheets that universally reset or normalize default CSS.

3. components are like "mini" layouts. Styles for small, reusable pieces of the site should reside here (think buttons, forms, profile pictures, etc.)

4. pages is where page-specific styles reside. For instance, if a project contained several style rules that are only ever used on the "Contact Us" page, they'd live here in a _contact.scss file, as seen above.
