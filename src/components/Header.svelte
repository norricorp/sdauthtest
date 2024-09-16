<script>
  import { Link, navigate  } from "svelte-navigator";
//  import Modal,{getModal} from './Modal.svelte';
//  import LoginDialog from './LoginDialog.svelte';
//  import Register from './Register.svelte';
  import { getDirectusInstance } from "../services/directus";
  import { passwordRequest, logout, readSettings } from '@directus/sdk';

  import { authToken, userId, emailName, authenticated, fullName, refreshToken, directusAuth} from '../stores'

  import LoginModal from "./LoginModal.svelte";

	let showPopupLogin = false;
	let showPopupRegister = false;
	let showPopUpChangePW = false;
	let showPopUpTestPW = false;

	const directus = getDirectusInstance();
		
	function onShowPopup(popup) {
		switch (popup) {
		case 1:
			showPopupLogin = true;
			break;
		case 2:
			showPopupRegister = true;
			break;
		case 3:
			showPopUpChangePW = true;
			break;
		default:
			console.log("Something gone wrong with popup open selection " + popup);
		}
	}

	function onPopupClose(popup) {
		switch (popup) {
		case 1:
			showPopupLogin = false;
			break;
		case 2:
			showPopupRegister = false;
			break;
 		case 3:
			showPopUpChangePW = false;
			break; 
		default:
			console.log("Something gone wrong with popup close selection " + popup);
		}
	}	


	function setSelection(){
		console.log('and authenticated is ' + $authenticated);
	}

	async function setLogout() {

		console.log("logout: refresh token is " + $refreshToken);
//		await directus.logout()
		await directus.request(logout($refreshToken))
			.then(() => {
				console.log("logout OK - auth token is " + $authToken)
				$authenticated = false;
				$emailName = "";
				$authToken = "";
				$refreshToken = "";
				$userId = 0;
				$fullName = "";
				navigate("/");
	//			location.replace("/");   
			})
			.catch((error) => {
				console.log("Logout error " + JSON.stringify(error));
			});

	}


</script>

<header>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<div class="container-fluid">
	  
	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
		  <li class="nav-item active">
			<Link to={`/`} class="nav-link"> 
				Home
			</Link>
		  </li>


		{#if $authenticated} 
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			  {$fullName}
			</a>
			<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
			  <li>
				<a class="dropdown-item" href="/#" data-cy="logoutlink" on:click|preventDefault={()=>setLogout()}>
				   Logout
			    </a>
			  </li>
			</ul>
		  </li> 
		{:else}
		<li class="nav-item dropdown">
			<a class="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
			  Guest
			</a>
			<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
			  <li>
				<a class="nav-link" href="/#" data-cy="loginlink" on:click|preventDefault={()=>onShowPopup(1)}>
					Login 
				</a>
			  </li>
			</ul>
		  </li> 
		{/if}

		  <li class="nav-item">
			<a class="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</a>
		  </li> 
		</ul>

	  </div>
	</div>
  </nav> 


</header>

<LoginModal open={showPopupLogin} onClosed={(data) => onPopupClose(1)}/>
	


