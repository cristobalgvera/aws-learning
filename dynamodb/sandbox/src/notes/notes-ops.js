import {
  upsertItem,
  updateItem,
  deleteItem,
  batchDeleteItems,
  batchInsertItems,
  updateItemConditionallyOrCreate,
  upsertItemAsync,
} from '../utils/item-write-ops.js';
import { TD_NOTES_SDK_TABLE } from '../constants.js';
import {
  queryItems,
  batchGetItemsByKey,
  getItemByKey,
  scanItems,
} from '../utils/item-read-ops.js';

function upsertNote(note) {
  upsertItem(TD_NOTES_SDK_TABLE, note);
}

async function upsertNoteAsync(note) {
  await upsertItemAsync(TD_NOTES_SDK_TABLE, note);
}

function updateNoteConditionallyByTimestamp(note, value) {
  updateItemConditionallyOrCreate(TD_NOTES_SDK_TABLE, note, {
    ConditionExpression: '#timestamp <> :timestamp',
    ExpressionAttributeNames: {
      '#timestamp': 'timestamp',
    },
    ExpressionAttributeValues: {
      ':timestamp': value,
    },
  });
}

function updateNoteTitle(noteKey, updatedTitle) {
  const update = {
    UpdateExpression: 'set #title = :title',
    ExpressionAttributeNames: {
      '#title': 'title',
    },
    ExpressionAttributeValues: {
      ':title': updatedTitle,
    },
  };

  updateItem(TD_NOTES_SDK_TABLE, noteKey, update);
}

function deleteNote(noteKey) {
  deleteItem(TD_NOTES_SDK_TABLE, noteKey);
}

function batchDeleteNotes(noteKeys) {
  batchDeleteItems(TD_NOTES_SDK_TABLE, noteKeys);
}

function batchInsertNotes(notes) {
  batchInsertItems(TD_NOTES_SDK_TABLE, notes);
}

async function getNoteByKey(noteKey) {
  return await getItemByKey(TD_NOTES_SDK_TABLE, noteKey);
}

async function getNotesByKeys(noteKeys) {
  return await batchGetItemsByKey(TD_NOTES_SDK_TABLE, noteKeys);
}

async function queryNotesByUserId(userId) {
  return await queryItems(TD_NOTES_SDK_TABLE, {
    KeyConditionExpression: '#user_id = :user_id',
    ExpressionAttributeNames: {
      '#user_id': 'user_id',
    },
    ExpressionAttributeValues: {
      ':user_id': userId,
    },
  });
}

async function scanNotesByContent(content) {
  return await scanItems(TD_NOTES_SDK_TABLE, {
    FilterExpression: 'contains(#content, :content)',
    ExpressionAttributeNames: {
      '#content': 'content',
    },
    ExpressionAttributeValues: {
      ':content': content,
    },
  });
}

export default {
  upsertNote,
  upsertNoteAsync,
  updateNoteConditionallyByTimestamp,
  updateNoteTitle,
  deleteNote,
  batchDeleteNotes,
  batchInsertNotes,
  getNoteByKey,
  getNotesByKeys,
  queryNotesByUserId,
  scanNotesByContent,
};
