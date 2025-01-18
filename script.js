let notesTitles = [];
let notes = [];
let trashNotesTitles = [];
let trashNotes = [];
let archiveNotesTitles = [];
let archiveNotes = [];

function getNote() {
    let notesTitleInputRef = document.getElementById('note_title_input');
    let noteTitleInput = notesTitleInputRef.value;
    let notesInputRef = document.getElementById('note_input');
    let noteInput = notesInputRef.value;

    if (noteInput == "" && noteTitleInput == "") {
        alert("you have to fill both textfields!");
        return;
    } else {
        notes.push(noteInput);
        notesTitles.push(noteTitleInput);
        renderNotes();
        saveToLocalStorage();
        notesInputRef.value = "";
        notesTitleInputRef.value = "";
    }

}

function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let noteIndex = 0; noteIndex < notes.length; noteIndex++) {
        contentRef.innerHTML += getNoteTemplate(noteIndex);
    }
}

function renderTrashNotes() {
    let contentTrashRef = document.getElementById('trash_content');
    contentTrashRef.innerHTML = "";
    for (let noteTrashIndex = 0; noteTrashIndex < trashNotes.length; noteTrashIndex++) {
        contentTrashRef.innerHTML += getNoteTrashTemplate(noteTrashIndex);
    }
}

function renderArchiveNotes() {
    let contentArchiveRef = document.getElementById('archive_content');
    contentArchiveRef.innerHTML = "";
    for (let noteArchiveIndex = 0; noteArchiveIndex < archiveNotes.length; noteArchiveIndex++) {
        contentArchiveRef.innerHTML += getNoteArchiveTemplate(noteArchiveIndex);
    }
}


function noteToTrash(noteIndex) {
    let trashNote = notes.splice(noteIndex, 1);
    trashNotes.push(trashNote);
    let trashNoteTitle = notesTitles.splice(noteIndex, 1);
    trashNotesTitles.push(trashNoteTitle);
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

function noteToArchive(noteIndex) {
    let trashNote = notes.splice(noteIndex, 1);
    archiveNotes.push(trashNote);
    let trashNoteTitle = notesTitles.splice(noteIndex, 1);
    archiveNotesTitles.push(trashNoteTitle);
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

function TrashToNotes(noteTrashIndex) {
    let saveTrashNote = trashNotes.splice(noteTrashIndex, 1);
    notes.push(saveTrashNote);
    let saveTrashNoteTitle = trashNotesTitles.splice(noteTrashIndex, 1);
    notesTitles.push(saveTrashNoteTitle);
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}


function archiveToNotes(noteArchiveIndex) {
    let saveArchiveNote = archiveNotes.splice(noteArchiveIndex, 1);
    notes.push(saveArchiveNote);
    let saveArchiveNoteTitle = archiveNotesTitles.splice(noteArchiveIndex, 1);
    notesTitles.push(saveArchiveNoteTitle);
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}

function archiveToTrash(noteArchiveIndex) {
    let saveArchiveNote = archiveNotes.splice(noteArchiveIndex, 1);
    trashNotes.push(saveArchiveNote);
    let saveArchiveNoteTitle = archiveNotesTitles.splice(noteArchiveIndex, 1);
    trashNotesTitles.push(saveArchiveNoteTitle);
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}


function deleteNoteForEver(noteTrashIndex) {
    trashNotes.splice(noteTrashIndex, 1);
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes();
}