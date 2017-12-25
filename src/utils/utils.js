module.exports = {
  puppeteer: {
    fourOfours: (json) => {
      return json.map((entry) => {
        return(
          <div className='urlentry'>
            <p className='urltxt'>link txt: {entry[0]}</p>
            <p className='url'>url: {entry[1]}</p>
            <p className='status'>http status: {entry[2]}</p>
          </div>
        )
      });
    }
  }
}
