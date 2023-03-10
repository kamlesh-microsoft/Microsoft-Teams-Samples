import axios from 'axios';

// API call to get latest value of editor.
export function getLatestEditorValue(questionId,meetingId) {
    return axios.get(`${window.location.origin}/api/editorState?questionId=${questionId}&meetingId=${meetingId}`);
}

// API to save state value of editor.
export function saveEditorState(editorData) {
    return axios.post(`${window.location.origin}/api/editorState/update`, editorData);
}