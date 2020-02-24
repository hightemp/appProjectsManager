<script>
    import TopAppBar, {Row, Section, Title, FixedAdjust, DenseFixedAdjust, ProminentFixedAdjust, ShortFixedAdjust} from '@smui/top-app-bar';
    import IconButton from '@smui/icon-button';
/*
    var firebase = require('firebase');
    var firebaseui = require('firebaseui');
    // or using ES6 imports:
    import * as firebaseui from 'firebaseui'
*/
    import { auth, googleProvider } from './firebase';
    import { authState } from 'rxfire/auth';

    export let oUser;

    const unsubscribe = authState(auth).subscribe(u => oUser = u);

    function fnLogout()
    {
        auth.signOut();
    }

    function fnLogin()
    {
        auth.signInWithPopup(googleProvider);
    }
</script>

<TopAppBar dense=true variant="fixed">
  <Row>
    <Section>
      <Title>appProjectManager</Title>
    </Section>
    <Section align="end" toolbar>
        {#if oUser}
            {oUser.displayName}
            <IconButton class="material-icons" aria-label="Download" on:click={fnLogout}>person</IconButton>
        {:else}
            <IconButton class="material-icons" aria-label="Download" on:click={fnLogin}>input</IconButton>
        {/if}
    </Section>
  </Row>
</TopAppBar>