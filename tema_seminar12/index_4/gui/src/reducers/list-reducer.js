const INITIAL_STATE = {
  notes: [],
  error: null,
  fetching: false,
  fetched: false
}

export default function reducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_NOTES_PENDING':
      return { ...state, error: null, fetching: true, fetched: false }
    case 'GET_NOTES_FULFILLED':
      return { ...state, notes: action.payload, fetching: false, fetched: true }
    case 'GET_NOTES_REJECTED':
      return { ...state, error: action.payload, fetching: false, fetched: false }
    case 'DELETE_NOTE_PENDING':
      return { ...state, fetching: true, error: null }
    case 'DELETE_NOTE_FULFILLED':
      return { 
        ...state, 
        fetching: false, 
        notes: state.notes.filter(e => e.id !== action.payload) 
      }
    case 'DELETE_NOTE_REJECTED':
      return { ...state, fetching: false, error: action.payload }
      default:
      return state
  }
}
