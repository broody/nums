/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  query: 'World__Query';
  mutation: never;
  subscription: 'World__Subscription';
  types: {
    'Boolean': unknown;
    'ContractAddress': unknown;
    'Created': { kind: 'OBJECT'; name: 'Created'; fields: { 'game_id': { name: 'game_id'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; } }; 'player': { name: 'player'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; } }; 'max_slots': { name: 'max_slots'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; } }; 'max_number': { name: 'max_number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; } }; 'entity': { name: 'entity'; type: { kind: 'OBJECT'; name: 'World__Entity'; ofType: null; } }; }; };
    'CreatedConnection': { kind: 'OBJECT'; name: 'CreatedConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'CreatedEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'CreatedEdge': { kind: 'OBJECT'; name: 'CreatedEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'Created'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'CreatedOrder': { kind: 'INPUT_OBJECT'; name: 'CreatedOrder'; inputFields: [{ name: 'direction'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; }; defaultValue: null }, { name: 'field'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'CreatedOrderField'; ofType: null; }; }; defaultValue: null }]; };
    'CreatedOrderField': { kind: 'ENUM'; name: 'CreatedOrderField'; type: 'GAME_ID' | 'PLAYER' | 'MAX_SLOTS' | 'MAX_NUMBER'; };
    'CreatedWhereInput': { kind: 'INPUT_OBJECT'; name: 'CreatedWhereInput'; inputFields: [{ name: 'game_id'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idGT'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idGTE'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idLT'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idLTE'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idNEQ'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idEQ'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'player'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerGT'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerGTE'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerLT'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerLTE'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerNEQ'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerEQ'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'max_slots'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsGT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsGTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsLT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsLTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsNEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberGT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberGTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberLT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberLTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberNEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }]; };
    'Cursor': unknown;
    'DateTime': unknown;
    'Float': unknown;
    'Game': { kind: 'OBJECT'; name: 'Game'; fields: { 'game_id': { name: 'game_id'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; } }; 'player': { name: 'player'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; } }; 'max_slots': { name: 'max_slots'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; } }; 'remaining_slots': { name: 'remaining_slots'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; } }; 'max_number': { name: 'max_number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; } }; 'next_number': { name: 'next_number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; } }; 'entity': { name: 'entity'; type: { kind: 'OBJECT'; name: 'World__Entity'; ofType: null; } }; }; };
    'GameConnection': { kind: 'OBJECT'; name: 'GameConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'GameEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'GameEdge': { kind: 'OBJECT'; name: 'GameEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'Game'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'GameOrder': { kind: 'INPUT_OBJECT'; name: 'GameOrder'; inputFields: [{ name: 'direction'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; }; defaultValue: null }, { name: 'field'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'GameOrderField'; ofType: null; }; }; defaultValue: null }]; };
    'GameOrderField': { kind: 'ENUM'; name: 'GameOrderField'; type: 'GAME_ID' | 'PLAYER' | 'MAX_SLOTS' | 'REMAINING_SLOTS' | 'MAX_NUMBER' | 'NEXT_NUMBER'; };
    'GameWhereInput': { kind: 'INPUT_OBJECT'; name: 'GameWhereInput'; inputFields: [{ name: 'game_id'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idGT'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idGTE'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idLT'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idLTE'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idNEQ'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idEQ'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'player'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerGT'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerGTE'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerLT'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerLTE'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerNEQ'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerEQ'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'max_slots'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsGT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsGTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsLT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsLTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsNEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_slotsEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'remaining_slots'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'remaining_slotsGT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'remaining_slotsGTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'remaining_slotsLT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'remaining_slotsLTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'remaining_slotsNEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'remaining_slotsEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'max_number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberGT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberGTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberLT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberLTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberNEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'max_numberEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'next_number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'next_numberGT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'next_numberGTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'next_numberLT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'next_numberLTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'next_numberNEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'next_numberEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }]; };
    'ID': unknown;
    'Inserted': { kind: 'OBJECT'; name: 'Inserted'; fields: { 'game_id': { name: 'game_id'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; } }; 'player': { name: 'player'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; } }; 'slot': { name: 'slot'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; } }; 'number': { name: 'number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; } }; 'entity': { name: 'entity'; type: { kind: 'OBJECT'; name: 'World__Entity'; ofType: null; } }; }; };
    'InsertedConnection': { kind: 'OBJECT'; name: 'InsertedConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'InsertedEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'InsertedEdge': { kind: 'OBJECT'; name: 'InsertedEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'Inserted'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'InsertedOrder': { kind: 'INPUT_OBJECT'; name: 'InsertedOrder'; inputFields: [{ name: 'direction'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; }; defaultValue: null }, { name: 'field'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'InsertedOrderField'; ofType: null; }; }; defaultValue: null }]; };
    'InsertedOrderField': { kind: 'ENUM'; name: 'InsertedOrderField'; type: 'GAME_ID' | 'PLAYER' | 'SLOT' | 'NUMBER'; };
    'InsertedWhereInput': { kind: 'INPUT_OBJECT'; name: 'InsertedWhereInput'; inputFields: [{ name: 'game_id'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idGT'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idGTE'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idLT'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idLTE'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idNEQ'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idEQ'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'player'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerGT'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerGTE'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerLT'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerLTE'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerNEQ'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerEQ'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'slot'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotGT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotGTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotLT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotLTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotNEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberGT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberGTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberLT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberLTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberNEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }]; };
    'Int': unknown;
    'ModelUnion': { kind: 'UNION'; name: 'ModelUnion'; fields: {}; possibleTypes: 'Game' | 'Slot' | 'Created' | 'Inserted'; };
    'OrderDirection': { kind: 'ENUM'; name: 'OrderDirection'; type: 'ASC' | 'DESC'; };
    'Slot': { kind: 'OBJECT'; name: 'Slot'; fields: { 'game_id': { name: 'game_id'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; } }; 'player': { name: 'player'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; } }; 'slot': { name: 'slot'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; } }; 'number': { name: 'number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; } }; 'entity': { name: 'entity'; type: { kind: 'OBJECT'; name: 'World__Entity'; ofType: null; } }; }; };
    'SlotConnection': { kind: 'OBJECT'; name: 'SlotConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'SlotEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'SlotEdge': { kind: 'OBJECT'; name: 'SlotEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'Slot'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'SlotOrder': { kind: 'INPUT_OBJECT'; name: 'SlotOrder'; inputFields: [{ name: 'direction'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; }; defaultValue: null }, { name: 'field'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'SlotOrderField'; ofType: null; }; }; defaultValue: null }]; };
    'SlotOrderField': { kind: 'ENUM'; name: 'SlotOrderField'; type: 'GAME_ID' | 'PLAYER' | 'SLOT' | 'NUMBER'; };
    'SlotWhereInput': { kind: 'INPUT_OBJECT'; name: 'SlotWhereInput'; inputFields: [{ name: 'game_id'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idGT'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idGTE'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idLT'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idLTE'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idNEQ'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'game_idEQ'; type: { kind: 'SCALAR'; name: 'u32'; ofType: null; }; defaultValue: null }, { name: 'player'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerGT'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerGTE'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerLT'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerLTE'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerNEQ'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'playerEQ'; type: { kind: 'SCALAR'; name: 'ContractAddress'; ofType: null; }; defaultValue: null }, { name: 'slot'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotGT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotGTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotLT'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotLTE'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotNEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'slotEQ'; type: { kind: 'SCALAR'; name: 'u8'; ofType: null; }; defaultValue: null }, { name: 'number'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberGT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberGTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberLT'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberLTE'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberNEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }, { name: 'numberEQ'; type: { kind: 'SCALAR'; name: 'u16'; ofType: null; }; defaultValue: null }]; };
    'String': unknown;
    'World__Content': { kind: 'OBJECT'; name: 'World__Content'; fields: { 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'description': { name: 'description'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'website': { name: 'website'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'iconUri': { name: 'iconUri'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'coverUri': { name: 'coverUri'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'socials': { name: 'socials'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'World__Social'; ofType: null; }; } }; }; };
    'World__Entity': { kind: 'OBJECT'; name: 'World__Entity'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; } }; 'keys': { name: 'keys'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'eventId': { name: 'eventId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'executedAt': { name: 'executedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'updatedAt': { name: 'updatedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'models': { name: 'models'; type: { kind: 'LIST'; name: never; ofType: { kind: 'UNION'; name: 'ModelUnion'; ofType: null; }; } }; }; };
    'World__EntityConnection': { kind: 'OBJECT'; name: 'World__EntityConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'World__EntityEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'World__EntityEdge': { kind: 'OBJECT'; name: 'World__EntityEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'World__Entity'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'World__Event': { kind: 'OBJECT'; name: 'World__Event'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; } }; 'keys': { name: 'keys'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'data': { name: 'data'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'executedAt': { name: 'executedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'transactionHash': { name: 'transactionHash'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'World__EventConnection': { kind: 'OBJECT'; name: 'World__EventConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'World__EventEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'World__EventEdge': { kind: 'OBJECT'; name: 'World__EventEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'World__Event'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'World__EventMessage': { kind: 'OBJECT'; name: 'World__EventMessage'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; } }; 'keys': { name: 'keys'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'eventId': { name: 'eventId'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'executedAt': { name: 'executedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'updatedAt': { name: 'updatedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'models': { name: 'models'; type: { kind: 'LIST'; name: never; ofType: { kind: 'UNION'; name: 'ModelUnion'; ofType: null; }; } }; }; };
    'World__EventMessageConnection': { kind: 'OBJECT'; name: 'World__EventMessageConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'World__EventMessageEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'World__EventMessageEdge': { kind: 'OBJECT'; name: 'World__EventMessageEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'World__EventMessage'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'World__Metadata': { kind: 'OBJECT'; name: 'World__Metadata'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; } }; 'uri': { name: 'uri'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'worldAddress': { name: 'worldAddress'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'String'; ofType: null; }; } }; 'content': { name: 'content'; type: { kind: 'OBJECT'; name: 'World__Content'; ofType: null; } }; 'iconImg': { name: 'iconImg'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'coverImg': { name: 'coverImg'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'executedAt': { name: 'executedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'updatedAt': { name: 'updatedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; }; };
    'World__MetadataConnection': { kind: 'OBJECT'; name: 'World__MetadataConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'World__MetadataEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'World__MetadataEdge': { kind: 'OBJECT'; name: 'World__MetadataEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'World__Metadata'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'World__Model': { kind: 'OBJECT'; name: 'World__Model'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; } }; 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'classHash': { name: 'classHash'; type: { kind: 'SCALAR'; name: 'felt252'; ofType: null; } }; 'contractAddress': { name: 'contractAddress'; type: { kind: 'SCALAR'; name: 'felt252'; ofType: null; } }; 'transactionHash': { name: 'transactionHash'; type: { kind: 'SCALAR'; name: 'felt252'; ofType: null; } }; 'executedAt': { name: 'executedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; }; };
    'World__ModelConnection': { kind: 'OBJECT'; name: 'World__ModelConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'World__ModelEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'World__ModelEdge': { kind: 'OBJECT'; name: 'World__ModelEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'World__Model'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'World__ModelOrder': { kind: 'INPUT_OBJECT'; name: 'World__ModelOrder'; inputFields: [{ name: 'direction'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'OrderDirection'; ofType: null; }; }; defaultValue: null }, { name: 'field'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'ENUM'; name: 'World__ModelOrderField'; ofType: null; }; }; defaultValue: null }]; };
    'World__ModelOrderField': { kind: 'ENUM'; name: 'World__ModelOrderField'; type: 'NAME' | 'CLASS_HASH'; };
    'World__PageInfo': { kind: 'OBJECT'; name: 'World__PageInfo'; fields: { 'hasPreviousPage': { name: 'hasPreviousPage'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; } }; 'hasNextPage': { name: 'hasNextPage'; type: { kind: 'SCALAR'; name: 'Boolean'; ofType: null; } }; 'startCursor': { name: 'startCursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; 'endCursor': { name: 'endCursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'World__Query': { kind: 'OBJECT'; name: 'World__Query'; fields: { 'entity': { name: 'entity'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__Entity'; ofType: null; }; } }; 'entities': { name: 'entities'; type: { kind: 'OBJECT'; name: 'World__EntityConnection'; ofType: null; } }; 'eventMessage': { name: 'eventMessage'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__EventMessage'; ofType: null; }; } }; 'eventMessages': { name: 'eventMessages'; type: { kind: 'OBJECT'; name: 'World__EventMessageConnection'; ofType: null; } }; 'events': { name: 'events'; type: { kind: 'OBJECT'; name: 'World__EventConnection'; ofType: null; } }; 'metadatas': { name: 'metadatas'; type: { kind: 'OBJECT'; name: 'World__MetadataConnection'; ofType: null; } }; 'model': { name: 'model'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__Model'; ofType: null; }; } }; 'models': { name: 'models'; type: { kind: 'OBJECT'; name: 'World__ModelConnection'; ofType: null; } }; 'transaction': { name: 'transaction'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__Transaction'; ofType: null; }; } }; 'transactions': { name: 'transactions'; type: { kind: 'OBJECT'; name: 'World__TransactionConnection'; ofType: null; } }; 'gameModels': { name: 'gameModels'; type: { kind: 'OBJECT'; name: 'GameConnection'; ofType: null; } }; 'slotModels': { name: 'slotModels'; type: { kind: 'OBJECT'; name: 'SlotConnection'; ofType: null; } }; 'createdModels': { name: 'createdModels'; type: { kind: 'OBJECT'; name: 'CreatedConnection'; ofType: null; } }; 'insertedModels': { name: 'insertedModels'; type: { kind: 'OBJECT'; name: 'InsertedConnection'; ofType: null; } }; }; };
    'World__Social': { kind: 'OBJECT'; name: 'World__Social'; fields: { 'name': { name: 'name'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; 'url': { name: 'url'; type: { kind: 'SCALAR'; name: 'String'; ofType: null; } }; }; };
    'World__Subscription': { kind: 'OBJECT'; name: 'World__Subscription'; fields: { 'entityUpdated': { name: 'entityUpdated'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__Entity'; ofType: null; }; } }; 'eventMessageUpdated': { name: 'eventMessageUpdated'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__EventMessage'; ofType: null; }; } }; 'eventEmitted': { name: 'eventEmitted'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__Event'; ofType: null; }; } }; 'modelRegistered': { name: 'modelRegistered'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__Model'; ofType: null; }; } }; }; };
    'World__Transaction': { kind: 'OBJECT'; name: 'World__Transaction'; fields: { 'id': { name: 'id'; type: { kind: 'SCALAR'; name: 'ID'; ofType: null; } }; 'transactionHash': { name: 'transactionHash'; type: { kind: 'SCALAR'; name: 'felt252'; ofType: null; } }; 'senderAddress': { name: 'senderAddress'; type: { kind: 'SCALAR'; name: 'felt252'; ofType: null; } }; 'calldata': { name: 'calldata'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'felt252'; ofType: null; }; } }; 'maxFee': { name: 'maxFee'; type: { kind: 'SCALAR'; name: 'felt252'; ofType: null; } }; 'signature': { name: 'signature'; type: { kind: 'LIST'; name: never; ofType: { kind: 'SCALAR'; name: 'felt252'; ofType: null; }; } }; 'nonce': { name: 'nonce'; type: { kind: 'SCALAR'; name: 'felt252'; ofType: null; } }; 'executedAt': { name: 'executedAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; 'createdAt': { name: 'createdAt'; type: { kind: 'SCALAR'; name: 'DateTime'; ofType: null; } }; }; };
    'World__TransactionConnection': { kind: 'OBJECT'; name: 'World__TransactionConnection'; fields: { 'edges': { name: 'edges'; type: { kind: 'LIST'; name: never; ofType: { kind: 'OBJECT'; name: 'World__TransactionEdge'; ofType: null; }; } }; 'totalCount': { name: 'totalCount'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'SCALAR'; name: 'Int'; ofType: null; }; } }; 'pageInfo': { name: 'pageInfo'; type: { kind: 'NON_NULL'; name: never; ofType: { kind: 'OBJECT'; name: 'World__PageInfo'; ofType: null; }; } }; }; };
    'World__TransactionEdge': { kind: 'OBJECT'; name: 'World__TransactionEdge'; fields: { 'node': { name: 'node'; type: { kind: 'OBJECT'; name: 'World__Transaction'; ofType: null; } }; 'cursor': { name: 'cursor'; type: { kind: 'SCALAR'; name: 'Cursor'; ofType: null; } }; }; };
    'felt252': unknown;
    'u16': unknown;
    'u32': unknown;
    'u8': unknown;
  };
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}