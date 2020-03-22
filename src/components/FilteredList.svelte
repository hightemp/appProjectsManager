<script>
import Menu from '@smui/menu';
import List, {Item, Separator, Text} from '@smui/list'; 
import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
import Textfield, {Input} from '@smui/textfield';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let sFilterString = "";
export let bEnableFilter = false;

let oMenu;

function fnAddClick() {
  dispatch('add_click', {});
}

function fnRemoveClick() {
  dispatch('remove_click', {});
}

/*
function fnGetVariant()
{
  return bEnableFilter ? 'unelevated' : 'outlined';
}
*/

$: variant = bEnableFilter ? 'unelevated' : 'outlined';
</script>

<div class="col column filtered-list">
  <div class="row col-auto">
    <Textfield dense variant="outlined" bind:value={sFilterString} label="Filter" class="col"/>
    <Button 
      dense
      class="col-auto full-height icon-button" 
      {variant} 
      on:click={() => bEnableFilter = !bEnableFilter }
    >
      <Icon class="material-icons">filter_list</Icon>
    </Button>
    <div use:GroupItem>
      <Button 
        dense
        variant="outlined" 
        class="col-auto full-height icon-button"
        on:click={() => oMenu.setOpen(true)}
      >
        <Icon class="material-icons">more_vert</Icon>
      </Button>
      <Menu bind:this={oMenu} anchorCorner="TOP_LEFT">
        <List>
          <Item on:SMUI:action={fnAddClick}><Text>Add</Text></Item>
          <Item on:SMUI:action={fnRemoveClick}><Text>Remove</Text></Item>
          <!--
          <Separator />
          <Item on:SMUI:action={() => clicked++}><Text>Thing 3</Text></Item>
          -->
        </List>
      </Menu>
    </div>
  </div>
  <div class="col">
  </div>
</div>