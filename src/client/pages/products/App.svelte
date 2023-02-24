<script>
  import { onMount } from "svelte";
  let products = [];

  onMount(async () => {
    const response = await fetch("/api/products");
    products = await response.json();
    console.log(products);
  });
</script>

<h1>Products</h1>

<ul>
  {#each products as product (product.id)}
    <li>
      {product.name} - {product.price}
    </li>
  {/each}
</ul>
