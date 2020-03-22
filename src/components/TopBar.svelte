<script>
import TopAppBar, {Row, Section, Title, FixedAdjust, DenseFixedAdjust, ProminentFixedAdjust, ShortFixedAdjust} from '@smui/top-app-bar';
import IconButton from '@smui/icon-button';

import Menu from '@smui/menu';
import List, {Item, Separator, Text} from '@smui/list'; 
import Button, {Group, GroupItem, Label, Icon} from '@smui/button';

import { auth, googleProvider } from '../lib/firebase';
import { authState } from 'rxfire/auth';

export let oUser;

const unsubscribe = authState(auth).subscribe(u => oUser = u);
let oMenu;

function fnLogout()
{
  auth.signOut();
}

function fnLogin()
{
  auth.signInWithPopup(googleProvider);
}
</script>

<TopAppBar dense=true variant="static" class="col-auto"> <!-- variant="fixed" -->
  <Row>
    <Section>
      <Title>appProjectManager v1.01</Title>
    </Section>
    <Section align="end" toolbar>
      {#if oUser}
        {oUser.displayName}
        <IconButton class="material-icons" aria-label="Download" on:click={fnLogout}>person</IconButton>
        <div use:GroupItem>
          <Button 
            dense
            variant="outlined" 
            class="col-auto full-height icon-button"
            on:click={() => oMenu.setOpen(true)}
          >
            <Icon class="material-icons">exit_to_app</Icon>
          </Button>
          <Menu bind:this={oMenu} anchorCorner="TOP_LEFT">
            <List>
              <!--
              <Separator />
              <Item on:SMUI:action={() => clicked++}><Text>Thing 3</Text></Item>
              -->
            </List>
          </Menu>
        </div>
      {:else}
        <IconButton class="material-icons" aria-label="Download" on:click={fnLogin}>input</IconButton>
      {/if}
    </Section>
  </Row>
</TopAppBar>