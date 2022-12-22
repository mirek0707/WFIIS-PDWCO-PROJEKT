CREATE CONSTRAINT IF NOT EXISTS FOR (p:Player) REQUIRE (p.name) IS UNIQUE;
CREATE INDEX IF NOT EXISTS FOR (p:Player) ON (p.born);
CREATE CONSTRAINT IF NOT EXISTS FOR (c:Club) REQUIRE (c.name) IS UNIQUE;
CREATE INDEX IF NOT EXISTS FOR (c:Club) ON (c.founded);

CREATE (Barca:Club {name:"FC Barcelona", founded:1899, city:'Barcelona', nation:'Hiszpania'})
CREATE (Bayern:Club {name:"Bayern Monachium", founded:1900, city:'Monachium', nation:'Niemcy'})
CREATE (Borussia:Club {name:"Borussia Dortmund", founded:1909, city:'Dortmund', nation:'Niemcy'})

CREATE (Lewandowski:Player {name:'Robert Lewandowski', born:1988, nationality:'Polska', position:'napastnik'})
CREATE (Stegen:Player {name:'Marc-André ter Stegen', born:1992, nationality:'Niemcy', position:'bramkarz'})
CREATE (Alba:Player {name:'Jordi Alba', born:1989, nationality:'Hiszpania', position:'obrońca'})
CREATE (Pique:Player {name:'Gerard Piqué', born:1987, nationality:'Hiszpania', position:'obrońca'})
CREATE (Dembele:Player {name:'Ousmane Dembélé', born:1997, nationality:'Francja', position:'napastnik'})
CREATE (Coutinho:Player {name:'Philippe Coutinho', born:1992, nationality:'Brazylia', position:'pomocnik'})
CREATE (Hummels:Player {name:'Mats Hummels', born:1988, nationality:'Niemcy', position:'obrońca'})

CREATE (Lewandowski)-[:PLAYED_IN {start:'2022', end:'now'}]->(Barca)
CREATE (Stegen)-[:PLAYED_IN {start:'2014', end:'now'}]->(Barca)
CREATE (Pique)-[:PLAYED_IN {start:'2008', end:'2022'}]->(Barca)
CREATE (Alba)-[:PLAYED_IN {start:'2012', end:'now'}]->(Barca)
CREATE (Dembele)-[:PLAYED_IN {start:'2017', end:'now'}]->(Barca)
CREATE (Coutinho)-[:PLAYED_IN {start:'2018', end:'2019'}]->(Barca)
CREATE (Coutinho)-[:PLAYED_IN {start:'2020', end:'2022'}]->(Barca)
CREATE (Lewandowski)-[:PLAYED_IN {start:'2014', end:'2022'}]->(Bayern)
CREATE (Coutinho)-[:PLAYED_IN {start:'2019', end:'2020'}]->(Bayern)
CREATE (Hummels)-[:PLAYED_IN {start:'2007', end:'2008'}]->(Bayern)
CREATE (Hummels)-[:PLAYED_IN {start:'2016', end:'2019'}]->(Bayern)
CREATE (Lewandowski)-[:PLAYED_IN {start:'2010', end:'2014'}]->(Borussia)
CREATE (Dembele)-[:PLAYED_IN {start:'2016', end:'2017'}]->(Borussia)
CREATE (Hummels)-[:PLAYED_IN {start:'2008', end:'2016'}]->(Borussia)
CREATE (Hummels)-[:PLAYED_IN {start:'2019', end:'now'}]->(Borussia)