const { addNewLog, getAllLogs } = require('../models/logsModel');

async function logsIndex(req, res) {
  const allLogs = await getAllLogs();
  if (!allLogs) {
    res.status(500);
    return;
  }
  res.json(allLogs);
}

async function logsPost(req, res) {
  const newLog = await addNewLog(req.body);
  if (!newLog) {
    res.status(500);
    return;
  }
  res.json(newLog);
}

module.exports = { logsIndex, logsPost };
