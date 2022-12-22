const neo4j = require('neo4j-driver');
const driver = require('../config/neo4j').driver

exports.getClubs = async (req, res) => {
    const session = driver.session({ defaultAccessMode: neo4j.session.READ });
    try {
        const result = await session.readTransaction(txc => txc.run('MATCH (p:Club) RETURN p.name as name, p.nation as nation,  p.city as city, p.founded as founded ORDER BY name'))
        const records = result.records.map(record => {
            const name = record.get("name");
            const nation = record.get("nation");
            const founded = record.get("founded").low;
            const city = record.get("city");
            return { name, nation, founded, city }
        });

        return res.status(200).json({ status: 'ok', records })
    }
    catch (err) { return res.status(422).json({ status: 'error', error: 'Error' }) }
    finally {
        await session.close();
    }
}

exports.getClubsNames = async (req, res) => {
    const session = driver.session({ defaultAccessMode: neo4j.session.READ });
    try {
        const result = await session.readTransaction(txc => txc.run('MATCH (p:Club) RETURN p.name as name ORDER BY name'))
        const records = result.records.map(record => {
            const name = record.get("name");
            return name
        });

        return res.status(200).json({ status: 'ok', records })
    }
    catch (err) { return res.status(422).json({ status: 'error', error: 'Error' }) }
    finally {
        await session.close();
    }
}
