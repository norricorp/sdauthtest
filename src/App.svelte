<script>
  import { Router, Route } from "svelte-navigator";
  import Header from "./components/Header.svelte";



  import Coverpage from "./routes/Coverpage.svelte";


  import { authenticated} from './stores'

 
</script>

<div class="layout">
  <Router>
    <Header />
    <Route path="/">
        <Coverpage/>
    </Route> 
  </Router>

</div>
