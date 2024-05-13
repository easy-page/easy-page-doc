// Import the original mapper
// import Demo1 from '@site/src/demos/topic01';
import MDXComponents from '@theme-original/MDXComponents';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  // Demo1,
};
