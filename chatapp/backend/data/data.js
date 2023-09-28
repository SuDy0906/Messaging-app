const chats = [
  { "_id": { "$oid": "6515bb41bdc1c5bee0c52f74" }, "chatName": "Friends", "isGroupChat": true, "users": [{ "$oid": "6515900dd0903dee4ef10669" }, { "$oid": "65159079d0903dee4ef106b9" }, { "$oid": "6515b6a5721903bf96ebd6a0" }], "groupAdmin": { "$oid": "6515b6a5721903bf96ebd6a0" }, "createdAt": { "$date": { "$numberLong": "1695923009291" } }, "updatedAt": { "$date": { "$numberLong": "1695923009291" } }, "__v": { "$numberInt": "0" } },
  { "_id": { "$oid": "6515b72f721903bf96ebd6c3" }, "chatName": "sender", "isGroupChat": false, "users": [{ "$oid": "6515b6ef721903bf96ebd6aa" }, { "$oid": "6515b6a5721903bf96ebd6a0" }], "createdAt": { "$date": { "$numberLong": "1695921967724" } }, "updatedAt": { "$date": { "$numberLong": "1695921967724" } }, "__v": { "$numberInt": "0" } },
  { "_id": { "$oid": "6515b071e7c18fb3d4ef0fa8" }, "chatName": "sender", "isGroupChat": false, "users": [{ "$oid": "6515abd22069ec06a0105307" }, { "$oid": "6515900dd0903dee4ef10669" }], "createdAt": { "$date": { "$numberLong": "1695920241302" } }, "updatedAt": { "$date": { "$numberLong": "1695920241302" } }, "__v": { "$numberInt": "0" } }

];

module.exports = { chats }