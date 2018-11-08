export default function({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.TOKEN) {
    console.log('###############################')
    return redirect('/about')
  } else {
    console.log('NNNNNNNNNNN')
  }
}
