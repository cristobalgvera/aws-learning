import { TD_NOTES_SDK_TABLE } from './constants.js';
import Note from './notes/notes-ops.js';
import Table from './utils/table-ops.js';

// Table.listTables();
// Table.createTable(TD_NOTES_SDK_TABLE);
// Table.listTables();
// Table.updateTable(TD_NOTES_SDK_TABLE);
// Table.getTable(TD_NOTES_SDK_TABLE);
// Table.deleteTable(TD_NOTES_SDK_TABLE);

const noteKey = {
  user_id: '67890',
  timestamp: 21398900,
};

const noteKey2 = {
  user_id: '54321',
  timestamp: 21398842,
};

const sampleTitleAndContent = {
  title: 'Sample Title',
  content: 'Sample Content',
};

// Note.upsertNote({
//   ...noteKey,
//   title: 'Hey, test note!',
//   content: 'This is a test note',
// });

// Note.upsertNoteAsync({
//   ...noteKey,
//   title: 'Hey, test note!',
//   content: 'This is a test note',
// });

// Note.updateNoteTitle(noteKey, 'Hey, changed test note!');

// Note.deleteNote(noteKey);

// Note.batchDeleteNotes([noteKey, noteKey2]);

// Note.batchInsertNotes([
//   { ...noteKey, ...sampleTitleAndContent },
//   { ...noteKey2, ...sampleTitleAndContent },
// ]);

// Note.updateNoteConditionallyByTimestamp(
//   { ...noteKey, ...sampleTitleAndContent, content: 'UPDATED' },
//   noteKey.timestamp,
// );

// Note.getNoteByKey(noteKey);

// Note.getNotesByKeys([noteKey, noteKey2, { ...noteKey, user_id: '121' }]);

// Note.queryNotesByUserId(noteKey2.user_id);

Note.scanNotesByContent('a');
