<script>
import { $log as log } from './lib/utils';

log('App.svelte');

import 'normalize.css';
import './css/index.sass'

import TopBar from './components/TopBar.svelte';
import FilteredList from './components/FilteredList.svelte';
import TitleBlock from './components/TitleBlock.svelte';
import {FixedAdjust} from '@smui/top-app-bar';

let oUser = null;

let oSelectedElement = null;

var aProjectsList = [];
var aTodoList = [];

function fnAddProject()
{
  log('fnAddProject');
}

function fnRemoveProject()
{
  log('fnRemoveProject');
}

</script>

<TopBar bind:oUser={oUser}></TopBar>

{#if oUser}
<div class="root-block col row full-height">
  <div class="col-4 column">
    <TitleBlock sTitle="Projects"/>
    <FilteredList 
      on:add_click={fnAddProject}
      on:remove_click={fnRemoveProject}
    />
    <TitleBlock sTitle="Tasks"/>
    <FilteredList/>
  </div>
  {#if oSelectedElement}
    <div class="col"></div>
  {:else}
    <div class="centered-grey-text bg-grey-5 col">
      No selected element
    </div>
  {/if}
</div>
{:else}
<div class="not-signed-root-block centered-grey-text col">
  Not signed in
</div>
{/if}

<style lang="scss">
.root-block {
}
.centered-grey-text {
	display:flex; 
	justify-content:center; 
	align-items: center; 
	height: 100%; 
	color: #aaa; 
	font-size: 30px;
}
.not-signed-root-block {
}
</style>