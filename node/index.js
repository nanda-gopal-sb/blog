const simpleGit = require('simple-git');
// Test 
simpleGit().add('./*').commit("Date",{'--date':"2024-01-15 10:30:00"}).push('origin', 'main')