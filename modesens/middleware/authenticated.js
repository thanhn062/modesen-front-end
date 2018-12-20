export default function({ store, redirect }) {
  // If the user is not authenticated
  if (store.state.TOKEN) {
    return redirect('/about')
  } else {
  }
}
