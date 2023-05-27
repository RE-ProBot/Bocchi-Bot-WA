const fs = require('fs-extra');
const mysql = require('mysql2/promise');
const bluebird = require('bluebird');
const { color } = require('../tools/index.js');

const _setting = JSON.parse(fs.readFileSync('./config.json'))
let { dbHost, dbPort, dbUser, dbPasswort, dbDatabase } = _setting
c = console.log
/**
 * Add to DB
 * @param {string} table
 * @param {object} elem 
 */
const add = async (table, elem) => {
    var sqlTemplate = 'INSERT INTO ?? SET ?';
    var sql = mysql.format(sqlTemplate, table);

    // var data  = {
    //     id: elem.id, 
    //     time: elem.time, 
    //     reason: elem.reason,
    //     expired: elem.expired
    // };

    try {
        var con = await getConnection();
        await con.query(sql, elem, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

const run = async (sqlStatement) => {
    try {
        var con = await getConnection();
        await con.query(sqlStatement, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

// Select Beispiel:
// var result = db.run("SELECT * from users where userid = ${message.sender.id}")
// result.xp als beispiel dann

// Update Beispiel:
// db.run(`UPDATE tabelleHier set wert = ${beispielWert} where irgendwas = ${iwas}`)
// db.run('UPDATE `info` set wert = (SELECT `wert` WHERE name=\'supportcounter\' ) + 1 WHERE name=\'supportcounter\'')


/**
 * Add to DB
 * @param {string} table
 * @param {object} elem 
 */
const addNoCatch = async (table, elem) => {
    var sqlTemplate = 'INSERT INTO ?? SET ?';
    var sql = mysql.format(sqlTemplate, table);

    // var data  = {
    //     id: elem.id, 
    //     time: elem.time, 
    //     reason: elem.reason,
    //     expired: elem.expired
    // };

    var con = await getConnection();
    await con.query(sql, elem, function (error) {
        if (error) throw error;
    });
}

/**
 * Add to DB
 * @param {string} table
 * @param {string} id 
 */
const addId = async (table, id) => {
    var sqlTemplate = 'INSERT INTO ?? SET ?';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        id: id
    };

    try {
        var con = await getConnection();
        await con.query(sql, data, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {object} elem 
 */
const addGroupinfoMitWert = async (spalte, elem) => {
    var sqlTemplate = 'UPDATE ?? set ' + spalte + '=\'' + elem.wert + '\' WHERE groupid=\'' + elem.id + '\'';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {object} elem 
 */
const addGroupinfo = async (spalte, elem) => {
    var sql = 'INSERT INTO `groupinfo` (`groupid`, `' + spalte + '`) VALUES (\'' + elem.id + '\', true) ON DUPLICATE KEY UPDATE `' + spalte + '`=true';

    var data = { id: elem };
    data[spalte] = true;

    try {
        var con = await getConnection();
        await con.query(sql, data, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {string} id 
 */
const addGroupinfoId = async (spalte, id) => {
    var sql = 'INSERT INTO `groupinfo` (`groupid`, `' + spalte + '`) VALUES (\'' + id + '\', true) ON DUPLICATE KEY UPDATE `' + spalte + '`=true';

    // var data  = {
    //     id: elem.id,
    //     time: elem.time, 
    //     reason: elem.reason,
    //     expired: elem.expired
    // };

    var data = { id: id };
    data[spalte] = true;

    try {
        var con = await getConnection();
        await con.query(sql, data, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {object} elem 
 */
const setGroupinfo = async (spalte, elem) => {
    await addGroupinfo(spalte, elem);
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {string} id 
 */
const setGroupinfoId = async (spalte, id) => {
    await addGroupinfoId(spalte, id);
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {object} elem 
 */
const unsetGroupinfo = async (spalte, elem) => {
    var sqlTemplate = 'UPDATE ?? set ' + spalte + '=false WHERE groupid=\'' + elem.id + '\'';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}


/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {object} elem 
 */
 const setVerwNull = async (elem) => {
    var sqlTemplate = 'UPDATE ?? set verwarnungsanzahlautomatisch=0 WHERE groupid=\'' + elem.groupid +'\' AND userid=\'' + elem.userid +'\'';
    var sql = mysql.format(sqlTemplate, 'verwarnungssystem');

    try {
        var con = await getConnection();
        await con.query(sql, elem, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {string} id 
 */
const unsetGroupinfoId = async (spalte, id) => {
    var sqlTemplate = 'UPDATE ?? set ' + spalte + '=false WHERE groupid=\'' + id + '\'';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB groupinfo
 * @param {object} elem 
 */
const removeGroupinfo = async (elem) => {
    var sqlTemplate = 'DELETE FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    var data = {
        groupid: elem.id
    };

    try {
        var con = await getConnection();
        await con.query(sql, data, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB groupinfo
 * @param {string} id 
 */
const removeGroupinfoId = async (id) => {
    var sqlTemplate = 'DELETE FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    var data = {
        groupid: id
    };

    try {
        var con = await getConnection();
        await con.query(sql, data, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB
 * @param {string} table
 * @param {object} elem 
 */
const remove = async (table, elem) => {
    var sqlTemplate = 'DELETE FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        id: elem.id
    };

    try {
        var con = await getConnection();
        await con.query(sql, data, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB
 * @param {string} table
 * @param {object} elem 
 */
 const removeNeu = async (table, elem) => {
    var sqlTemplate = 'DELETE FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        console.log(sql);
        await con.query(sql, elem, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB
 * @param {string} table
 * @param {object} elem 
 */
 const removeKickfilter = async (table, elem) => {
    var sqlTemplate = `DELETE FROM ?? WHERE id='${elem.id}' and filter='${elem.filter}'`;
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB
 * @param {string} table
 * @param {object} elem 
 */
 const removeBeleidigung = async (table, elem) => {
    var sqlTemplate = `DELETE FROM ?? WHERE id='${elem.id}' and beleidigung='${elem.beleidigung}'`;
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}


/**
 * remove from DB
 * @param {string} table
 * @param {object} elem 
 */
const cleartable = async (table) => {
    var sqlTemplate = 'DELETE FROM ??';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        vote: '*' //Alle auswählen in der Tabelle 
    };


    try {
        var con = await getConnection();
        await con.query(sql, data, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB
 * @param {string} table
 * @param {object} elem 
 */
const cleartableNoCatch = async (table) => {
    var sqlTemplate = 'TRUNCATE ??';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        vote: '*' //Alle auswählen in der Tabelle 
    };

    var con = await getConnection();
    await con.query(sql, data, function (error) {
        if (error) throw error;
    });
}

/**
 * remove from DB
 * @param {string} table
 * @param {string} id 
 */
const removeId = async (table, id) => {
    var sqlTemplate = 'DELETE FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        id: id
    };

    try {
        var con = await getConnection();
        await con.query(sql, data, function (error) {
            if (error) throw error;
        });
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB
 * @param {string} table
 * @param {string} id 
 */
const removeIdNoCatch = async (table, id) => {
    var sqlTemplate = 'DELETE FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        id: id
    };

    var con = await getConnection();
    await con.query(sql, data, function (error) {
        if (error) throw error;
    });
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
const containsNeu = async (table, elem) => {
    var sqlTemplate = 'SELECT EXISTS(SELECT * FROM ?? WHERE ?) as result';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql, elem, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0][0].result == 1;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
const contains = async (table, elem) => {
    var sqlTemplate = 'SELECT EXISTS(SELECT * FROM ?? WHERE ?) as result';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        id: elem.id
    };

    try {
        var con = await getConnection();
        var result = await con.query(sql, data, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0][0].result == 1;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
 const teamContains = async (table, elem) => {
    var sqlTemplate = 'SELECT EXISTS(SELECT * FROM ?? WHERE id = \'' + elem.id + '\' AND typ = \'' + elem.typ + '\') as result';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        var returnValue = result[0][0].result == 1;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
 const teamContains2 = async (table, elem) => {
    var sqlTemplate = 'SELECT * from ?? where id= \'' + elem.id + '\' AND typ = \'' + elem.typ + '\'';
    var sql = mysql.format(sqlTemplate, table);
    try {

        var con = await getConnection();

        var result = await con.query(sql)

        var returnValue = result[0][0]['time'];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * remove from DB
 * @param {string} table
 * @param {object} elem 
 */
 const removetimer = async (table, elem) => {
    var sqlTemplate = `DELETE FROM ?? WHERE id='${elem.id}' and typ='${elem.typ}'`;
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {string} id 
 */
const containsId = async (table, id) => {
    var sqlTemplate = 'SELECT EXISTS(SELECT * FROM ?? WHERE ?) as result';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        id: id
    };

    try {
        var con = await getConnection();
        var result = await con.query(sql, data, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0][0].result == 1;
        // if(table === 'premium'){
        //     console.log(id + ": " + returnValue);
        // }
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB groupinfo
 * @param {string} spalte
 * @param {object} elem 
 */
const groupinfo = async (spalte, elem) => {
    var sqlTemplate = 'SELECT EXISTS(SELECT * FROM ?? WHERE groupid = \'' + elem.id + '\' AND ' + spalte + ' = true) as result';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        var returnValue = result[0][0].result == 1;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB groupinfo
 * @param {string} spalte
 * @param {string} id 
 */
const groupinfoId = async (spalte, id) => {
    var sqlTemplate = 'SELECT EXISTS(SELECT * FROM ?? WHERE groupid = \'' + id + '\' AND ' + spalte + ' = true) as result';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        var returnValue = result[0][0].result == 1;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB groupinfo
 * @param {string} spalte
 * @param {string} id 
 */
 const getWhereWhere = async (table, spalte1, spalte2, elem) => {
    var sqlTemplate = 'SELECT * FROM ?? WHERE ' + spalte1 + ' = \'' + elem.spalte1 + '\' AND ' + spalte2 + ' = \'' + elem.spalte2 + '\' ';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        var returnValue = result[0][0];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
const getNeu = async (table, elem) => {
    var sqlTemplate = 'SELECT * FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql, elem, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0][0];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
 const getVerwList = async (table, elem, order) => {
    var sqlTemplate = 'SELECT * FROM ?? WHERE ?  AND verwarnungsanzahlautomatisch > 0 ORDER BY ' + order + '  ASC';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql, elem, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
const get = async (table, elem) => {
    var sqlTemplate = 'SELECT * FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        id: elem.id
    };

    try {
        var con = await getConnection();
        var result = await con.query(sql, data, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0][0];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
const getFromAll = async (table) => {
    var sqlTemplate = 'SELECT * FROM ??';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        var returnValue = result[0];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
 const getFromAllWithWhere = async (table, elem) => {
    var sqlTemplate = 'SELECT * FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql, elem, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
 const getFromAllWithOrder = async (table, spalte) => {
    var sqlTemplate = 'SELECT * FROM ?? ORDER BY ' + spalte + ' ASC';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        var returnValue = result[0];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {string} id 
 */
const getId = async (table, id) => {
    var sqlTemplate = 'SELECT * FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    var data = {
        id: id
    };

    try {
        var con = await getConnection();
        var result = await con.query(sql, data, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0][0];
        if (typeof returnValue === typeof undefined) {
            return 0;
        }
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
    return 0;
}

/**
 * contains in DB
 * @param {string} spalte
 * @param {object} elem 
 */
const getGroupinfo = async (spalte, elem) => {
    var sqlTemplate = 'SELECT ' + spalte + ' FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    var data = {
        groupid: elem.id
    };

    try {
        var con = await getConnection();
        var result = await con.query(sql, data, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0][0][spalte] == 1;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} spalte
 * @param {string} id 
 */
const getGroupinfoId = async (spalte, id) => {
    var sqlTemplate = 'SELECT ' + spalte + ' FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, 'groupinfo');

    var data = {
        groupid: id
    };

    try {
        var con = await getConnection();
        var result = await con.query(sql, data, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0][0][spalte] == 1;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 * @param {string} spalte
 */
const getAll = async (table, spalte) => { //get spalte als Liste
    var sqlTemplate = 'SELECT ' + spalte + ' FROM ??';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        var returnValues = [];
        if (typeof result[0] !== typeof undefined) {
            result[0].forEach(e => returnValues.push(e[spalte]));
        }
        return returnValues;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 */
const setLevel = async (id, xp, level) => {
    var sql = 'UPDATE `level` set ' + `xp` + ' = ' + xp + ', `level` = ' + level + ' WHERE id=\'' + id + '\'';

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {object} elem 
 */
 const updateVerwarnungssystem = async (elem) => {
    var sql = 'INSERT INTO `verwarnungssystem` (`groupid`, `userid`, `verwarnungsanzahlautomatisch`) VALUES (\'' + elem.groupid + '\', \'' + elem.userid + '\', \'' + elem.verwarnungsanzahlautomatisch + '\') ON DUPLICATE KEY UPDATE `verwarnungsanzahlautomatisch`=`verwarnungsanzahlautomatisch` + 1';
    
    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {object} elem 
 */
 const updatespendenId = async (elem) => {
    var sql = 'INSERT INTO `spenden` (`id`, `betrag`) VALUES (\'' + elem.id + '\', \'' + elem.betrag + '\') ON DUPLICATE KEY UPDATE `betrag`= `betrag` + ' + elem.betrag;
    
    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {object} elem 
 */
 const updateBocchiBot = async (elem) => {
    var sql = 'INSERT INTO `isBocchiBot` (`id`, `botnummer`, `typ`) VALUES (\'' + elem.id + '\', \'' + elem.botnummer + '\', \'' + elem.typ + '\') ON DUPLICATE KEY UPDATE `botnummer`= \'' + elem.botnummer + '\'';
    
    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {object} id 
 * @param {object} amount 
 */
const updateSupportCount = async () => {
    var sql = 'UPDATE `info` set wert = (SELECT `wert` WHERE name=\'supportcounter\' ) + 1 WHERE name=\'supportcounter\'';

    try {
        var con = await getConnection();
        await con.query(sql);

        var elem = await getFromAll('info', { 'name': 'supportcounter' })
        if (typeof elem !== typeof undefined) {
            return elem.wert;
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
    return 0;
}



/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {object} id 
 * @param {object} amount 
 */
const updateLevelId = async (spalte, id, amount) => {
    var sql = 'UPDATE `level` set ' + spalte + ' = (SELECT `' + spalte + '` WHERE id=\'' + id + '\' ) + ' + amount + ' WHERE id=\'' + id + '\'';

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {object} id 
 */
const updateCmdtimer = async (id, timer) => {
    var sql = 'UPDATE `cmdtimer` set ' + timer + ' = now() WHERE id=\'' + id + '\'';

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}


const updatevorstellen = async (id, age) => {
    var sql = 'UPDATE `vorstellen` set age = ' + age + ' WHERE id=\'' + id + '\'';
        var con = await getConnection();
        await con.query(sql);
}

/**
 * Add to DB groupinfo
 * @param {object} id 
 */
 const updateTimer = async (id, typ) => {
    var now = '0';
    var sql = 'UPDATE `timer` set `time` = \'' + now + '\' WHERE id=\'' + id + '\' AND typ=\'' + typ + '\'';

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {object} id
 */
const getUserRank = async (id) => {
    var sql = 'SELECT (SELECT COUNT(*) FROM TABLE `level` x WHERE x.xp <= t.xp) AS position FROM TABLE `level` t WHERE t.id=\'' + id + '\'';

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        if (typeof result !== typeof undefined
            && typeof result[0] !== typeof undefined
            && typeof result[0][0] !== typeof undefined
            && typeof result[0][0].position !== typeof undefined) {

            var returnValue = result[0][0].position;
            return returnValue;
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
    return 10000;
}

/**
 * contains in DB
 * @param {string} table
 */
const count = async (table) => {
    var sqlTemplate = 'SELECT COUNT(*) as result FROM ??';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        var returnValue = result[0][0].result;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 */
const countWhere = async (table, elem) => {
    var sqlTemplate = 'SELECT COUNT(*) as result FROM ?? WHERE ?';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql, elem);

        var returnValue = result[0][0].result;
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 */
const getLeader = async (table, spalte, limit) => {
    var sqlTemplate = 'SELECT * FROM ?? ORDER BY `' + spalte + '` DESC ';
    if (limit > 0) {
        sqlTemplate += ' LIMIT ' + limit;
    }

    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql);
        return result[0];
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 */
 const getAsc = async (table, spalte, limit) => { // Aufsteigend
    var sqlTemplate = 'SELECT * FROM ?? ORDER BY `' + spalte + '` ASC ';
    if (limit > 0) {
        sqlTemplate += ' LIMIT ' + limit;
    }

    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql);
        return result[0];
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * contains in DB
 * @param {string} table
 */
 const getCMDLeader = async (limit) => {
    var sql = 'SELECT COUNT(command) as cmd, userid FROM log GROUP BY userid order by COUNT(command) desc';
    if (limit > 0) {
        sql += ' LIMIT ' + limit;
    }

    try {
        var con = await getConnection();
        var result = await con.query(sql);
        return result[0];
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}
/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/
//Vom Beta Bot in Hauptbot übertragen
/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {object} id 
 * @param {object} amount 
 */
 const updateGeldId = async (spalte, id, amount) => {
    var sql = 'UPDATE `waehrung` set ' + spalte + ' = (SELECT `' + spalte + '` WHERE id=\'' + id + '\' ) + ' + amount + ' WHERE id=\'' + id + '\'';

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

 /**
 * contains in DB
 * @param {string} table
 * @param {object} elem 
 */
  const randomfish = async (table, elem) => {
    var sqlTemplate = 'SELECT * FROM ?? WHERE ? ORDER BY RAND() LIMIT 1';
    var sql = mysql.format(sqlTemplate, table);

    try {
        var con = await getConnection();
        var result = await con.query(sql, elem, function (error) {
            if (error) throw error;
        });

        var returnValue = result[0];
        return returnValue;
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 */
 const setGeld = async (id, xp) => {
    var sql = 'UPDATE `waehrung` set ' + `geld` + ' = ' + xp + ' WHERE id=\'' + id + '\'';

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

/**
 * Add to DB groupinfo
 * @param {object} id
 */
 const getGeldRank = async (id) => {
    var sql = 'SELECT (SELECT COUNT(*) FROM TABLE `waehrung` x WHERE x.geld <= t.geld) AS position FROM TABLE `waehrung` t WHERE t.id=\'' + id + '\'';

    try {
        var con = await getConnection();
        var result = await con.query(sql);

        if (typeof result !== typeof undefined
            && typeof result[0] !== typeof undefined
            && typeof result[0][0] !== typeof undefined
            && typeof result[0][0].position !== typeof undefined) {

            var returnValue = result[0][0].position;
            return returnValue;
        }
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
    return 10000;
}

/**
 * Add to DB groupinfo
 * @param {string} spalte
 * @param {string} id 
 */
 const addFishInventar = async (id, elem) => {
    var sql = 'INSERT INTO `fischinventar` (`id`,  `insgesamt`, `müll`, `gewöhnlich`,  `selten`,  `episch`,  `legendär`,  `mythisch`,  `ultra`) ' +
    ' VALUES (\'' + id + '\',  \'' + elem.insgesamt + '\',  \'' + elem.müll + '\', \'' + elem.gewöhnlich + '\', \'' + elem.selten + '\', \'' + elem.episch + '\', \'' + elem.legendär + '\', \'' + elem.mythisch + '\', \'' + elem.ultra + '\') ' + 
    ' ON DUPLICATE KEY UPDATE ' + 
    '`insgesamt`= `insgesamt` + \'' + elem.insgesamt + '\',  ' +
    '`müll`= `müll` + \'' + elem.müll + '\',  ' +
    '`gewöhnlich`=  `gewöhnlich` + \'' + elem.gewöhnlich + '\',  ' +
    '`selten`= `selten` + \'' + elem.selten + '\',  ' +
    '`episch`= `episch` +  \'' + elem.episch + '\',  ' +
    '`legendär`= `legendär` + \'' + elem.legendär + '\',  ' + 
    '`mythisch` = `mythisch` + \'' + elem.mythisch + '\',  ' +
    '`ultra`= `ultra` + \'' + elem.ultra + '\' ';

    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

const setOnline = async (id, elem) => {
    var sql = 'UPDATE `hosts` SET online = \'' + elem + '\' WHERE id = \''+ id + '\';'
    try {
        var con = await getConnection();
        await con.query(sql);
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}

const getOnline = async () => {
    var sql = 'SELECT id, online FROM hosts;'; 
    try {
        var con = await getConnection();
        var result = await con.query(sql);

        return result[0];
    } catch (err) {
        console.error(color('[ERROR]', 'red'), err.message);
    }
}



/*
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/



var conGlobal;
async function getConnection() {
    if (typeof conGlobal === typeof undefined) {
        conGlobal = await mysql.createPool({
            host: dbHost,
            port: dbPort,
            user: dbUser,
            password: dbPasswort,
            database: dbDatabase,
            multipleStatements: true,
            waitForConnections: true,
            connectionLimit: 0,
            queueLimit: 0
        });
    }
    return conGlobal;
}


module.exports = {
    run,
    add,
    addGroupinfo,
    addGroupinfoId,
    addGroupinfoMitWert,
    addId,
    addNoCatch,
    cleartable,
    cleartableNoCatch,
    contains,
    containsId,
    containsNeu,
    teamContains,
    teamContains2,
    removetimer,
    count,
    countWhere,
    get,
    getAll,
    getCMDLeader,
    getVerwList,
    getFromAll,
    getFromAllWithWhere,
    getFromAllWithOrder,
    getGroupinfo,
    updateBocchiBot,
    getGroupinfoId,
    getId,
    getLeader,
    getNeu,
    getOnline,
    getUserRank,
    getWhereWhere,
    groupinfo,
    groupinfoId,
    remove,
    removeGroupinfo,
    removeGroupinfoId,
    removeId,
    removeIdNoCatch,
    removeKickfilter,
    removeBeleidigung,
    removeNeu,
    setGroupinfo,
    setGroupinfoId,
    setLevel,
    setOnline,
    unsetGroupinfo,
    unsetGroupinfoId,
    updateLevelId,
    updatespendenId,
    updateVerwarnungssystem,
    updateSupportCount,
    updateCmdtimer,
    updateTimer,
    getAsc,
    setVerwNull,
    getGeldRank,
    updateGeldId,
    randomfish,
    addFishInventar,
    setGeld,
    updatevorstellen

}
