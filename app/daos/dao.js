const daoCommon=require('./common/daoCommon');

const mainDao={
    ...daoCommon,
    ...require('./api/alterDao')

    // const filmDao=object.assign(daoCommon,require('./api/filmDao))

    // const filmDao=(...daoCommon,...require(./api/filmDao))

}

module.exports={
    mainDao
}