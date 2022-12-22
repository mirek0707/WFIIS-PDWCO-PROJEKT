const neo4j = require('neo4j-driver');
const driver = require('../config/neo4j').driver

exports.getPlayers = async (req, res) => {
    const session = driver.session({ defaultAccessMode: neo4j.session.READ });
    try {
        const result = await session.readTransaction(txc => txc.run('MATCH (p:Player) RETURN p.name as name, p.nationality as nation,  p.born as born, p.position as position ORDER BY name'))
        const records = result.records.map(record => {
            const name = record.get("name");
            const nationality = record.get("nation");
            const born = record.get("born").low;
            const position = record.get("position");
            return {name, nationality, born, position}
        });

        return res.status(200).json({ status: 'ok', records })
    }
    catch (err) { return res.status(422).json({ status: 'error', error: 'Error' }) }
    finally {
        await session.close();
    }
}

exports.getPlayersRelatedWithClub = async (req, res) => {
    const session = driver.session({ defaultAccessMode: neo4j.session.READ });
    const clubname = req.body.clubname
    try {
        const result = await session.readTransaction(txc => txc.run("MATCH (Club {name:'" + clubname +"' })-[r]-(Player) RETURN Player.name as name, r.start as start, r.end as end, Player.position as position, Player.nationality as nation ORDER BY end DESC, start DESC"))
        const records = result.records.map(record => {
            const name = record.get("name");
            const nationality = record.get("nation");
            const position = record.get("position");
            const start = record.get("start");
            const end = record.get("end");
            return {name, nationality, position, start, end}
        });

        return res.status(200).json({ status: 'ok', records })
    }
    catch (err) { return res.status(422).json({ status: 'error', error: 'Error' }) }
    finally {
        await session.close();
    }
}
