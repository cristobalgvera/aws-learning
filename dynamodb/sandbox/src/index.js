import { TD_NOTES_SDK_TABLE, TD_NOTES_TEST_TABLE } from './constants.js';
import Note from './notes/notes-ops.js';
import { batchInsertItems } from './utils/item-write-ops.js';
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

// Note.scanNotesByContent('a');

// Table.createTable(TD_NOTES_TEST_TABLE);

// function populateTestTable() {
//   const notes = [
//     {
//       user_id: 'A',
//       timestamp: 12345,
//       category: 'general',
//       note_id: 'n1',
//       title: 'Note 1',
//       content: 'Note 1 content',
//     },
//     {
//       user_id: 'B',
//       timestamp: 12346,
//       category: 'test',
//       note_id: 'n2',
//       title: 'Note 2',
//       content: 'Note 2 content',
//     },
//     {
//       user_id: 'C',
//       timestamp: 12347,
//       category: 'todo',
//       note_id: 'n3',
//       title: 'Note 3',
//       content: 'Note 3 content',
//     },
//     {
//       user_id: 'A',
//       timestamp: 12348,
//       category: 'test',
//       note_id: 'n4',
//       title: 'Note 4',
//       content: 'Note 4 content',
//     },
//     {
//       user_id: 'B',
//       timestamp: 12349,
//       category: 'todo',
//       note_id: 'n5',
//       title: 'Note 5',
//       content: 'Note 5 content',
//     },
//     {
//       user_id: 'C',
//       timestamp: 12350,
//       category: 'general',
//       note_id: 'n6',
//       title: 'Note 6',
//       content: 'Note 6 content',
//     },
//     {
//       user_id: 'A',
//       timestamp: 12351,
//       category: 'todo',
//       note_id: 'n7',
//       title: 'Note 7',
//       content: 'Note 7 content',
//     },
//     {
//       user_id: 'B',
//       timestamp: 12352,
//       category: 'general',
//       note_id: 'n8',
//       title: 'Note 8',
//       content: 'Note 8 content',
//     },
//     {
//       user_id: 'C',
//       timestamp: 12353,
//       category: 'test',
//       note_id: 'n9',
//       title: 'Note 9',
//       content: 'Note 9 content',
//     },
//     {
//       user_id: 'A',
//       timestamp: 12354,
//       category: 'general',
//       note_id: 'n10',
//       title: 'Note 10',
//       content: 'Note 10 content',
//     },
//     {
//       user_id: 'B',
//       timestamp: 12355,
//       category: 'test',
//       note_id: 'n11',
//       title: 'Note 11',
//       content: 'Note 11 content',
//     },
//     {
//       user_id: 'C',
//       timestamp: 12356,
//       category: 'todo',
//       note_id: 'n12',
//       title: 'Note 12',
//       content: 'Note 12 content',
//     },
//   ];

//   batchInsertItems(TD_NOTES_TEST_TABLE, notes);
// }

// populateTestTable();

async function paginateTestTableNotes() {
  let lastEvaluatedKey;

  while (true) {
    const { items, lastEvaluatedKey: lastKey } =
      await Note.scanNotesWithPagination(lastEvaluatedKey);

    lastEvaluatedKey = lastKey;

    console.log({ items });

    // Delay for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));

    if (!lastEvaluatedKey) break;
  }

  console.log('Done');
}

paginateTestTableNotes();
