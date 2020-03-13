<script>
  export let title, icon, className;
</script>

<style type="text/scss">
  @import "./Header.scss";
</style>

<span class="header">
  <i class="icon {icon}" />
  <h2 class={className}>{title}</h2>
</span>
