<script>
	console.log('App.svelte');

	import TopBar from './TopBar.svelte';
	import {FixedAdjust} from '@smui/top-app-bar';

	let oUser = "123";
	// let Adjust = FixedAdjust;
</script>

<TopBar bind:oUser={oUser}></TopBar>

<div use:FixedAdjust>
  {oUser}
</div>

<style>

</style>