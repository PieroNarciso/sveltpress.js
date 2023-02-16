<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./pages/Home/Page.svelte";
  import Products from "./pages/Products/Page.svelte";
</script>

<Router>
  <main>
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/products">PRODUCTS</Link>
    </nav>

    <Route path="/">
      <Home />
    </Route>
    <Route path="/products">
      <Products />
    </Route>
    <Route path="*">NOT FOUND</Route>
  </main>
</Router>
