<script>
  import Button, {Group, GroupItem, Label, Icon} from '@smui/button';
  import Textfield, {Input} from '@smui/textfield';

  export let sFilterString = "";
  export let bEnableFilter = false;

/*
  function fnGetVariant()
  {
    return bEnableFilter ? 'unelevated' : 'outlined';
  }
*/

  $: variant = bEnableFilter ? 'unelevated' : 'outlined';
</script>

<div class="col column">
  <div class="row col-auto">
    <Textfield dense variant="outlined" bind:value={sFilterString} label="Filter" class="col"/>
    <Button dense class="col-auto full-height" {variant} on:click={() => bEnableFilter = !bEnableFilter }><Icon class="material-icons">filter_list</Icon></Button>
  </div>
  <div class="col">
  </div>
</div>