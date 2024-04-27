<script>
  import { fetchIPAddress } from "../utils/detectBrowser";
  import { theme } from "../stores/theme";
  let hostname = window.location.hostname;
  let ip = fetchIPAddress()
</script>

<h1 class="font-bold flex">
  {#await fetchIPAddress()}
  <span style={`color: ${$theme.yellow};`}>guest</span>
  {:then ip}
  <span style={`color: ${$theme.yellow};`}>{ip}</span>
  {/await}
  <span style={`color: ${$theme.white}`}>@</span>
  <span style={`color: ${$theme.green}`}>{hostname}</span>
  <span style={`color: ${$theme.white}`}>:~$</span>
</h1>
