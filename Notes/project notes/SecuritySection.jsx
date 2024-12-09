const SecuritySection = ({userInput}) => {
    return (
        <section>
            <h1>Security Questions</h1>
            {/* Your nickname? */}
        <div>
        <label htmlFor="nickname">Your nickname?</label><br/>
        <input onChange={userInput}  type="text" id="nickname" name="nickname" placeholder="Ghost" required/>
        </div>
        {/* What's your family's pet nickname? */}
        <div>
        <label htmlFor="petNickname">What's your family's pet nickname?</label><br/>
        <input onChange={userInput}  type="text" id="petNickname" name="petNickname" placeholder="Max" required/>
        </div>
        {/* What's your favorite food? */}
        <div>
        <label htmlFor="favFood">What's your favorite food?</label><br/>
        <input onChange={userInput}  type="text" id="favFood" name="favFood" placeholder="chinese/ Shrimp w/Garlic Sauce" required/>
        </div>
        {/* What's your favorite color? */}
        <div>
        <label htmlFor="favColor">What's your favorite color?</label><br/>
        <input onChange={userInput}  type="text" id="favColor" name="favColor" placeholder="platinum-grey" required/>
        </div>
        {/* What's your favorite childhood celebrity? */}
        <div>
        <label htmlFor="favCelebrity">What's your favorite childhood celebrity?</label><br/>
        <input onChange={userInput}  type="text" id="favCelebrity" name="favCelebrity" placeholder="Michael Jackson" required/>
        </div>
        {/* What you would change your name to if you would? */}
        <div>
        <label htmlFor="changedName">What you would change your name to if you would?</label><br/>
        <input onChange={userInput}  type="text" id="changedName" name="changedName" placeholder="Giovanni Marterius Dominichi" required/>
        </div>
        {/* Grandmother's middle name? */}
        <div>
        <label htmlFor="gmaMiddleName">Grandmother's middle name?</label><br/>
        <input onChange={userInput}  type="text" id="gmaMiddleName" name="gmaMiddleName" placeholder="Nicole" required/>
        </div>
        {/* Your favorite all-time song-name? */}
        <div>
        <label htmlFor="songName">Your favorite all-time song-name?</label><br/>
        <input onChange={userInput}  type="text" id="songName" name="songName" placeholder="Glory" required/>
        </div>
        {/* Your username? */}
        <div>
        <label htmlFor="userName">Your username?</label><br/>
        <input onChange={userInput}  type="text" id="userName" name="userName" placeholder="jdoe" required/>
        </div>
        {/* Your password? */}
        <div>
        <label htmlFor="password">Your password?</label><br/>
        <input onChange={userInput}  type="text" id="password" name="password" placeholder="chess123" required/>
        </div>
        </section>
    )
}
export default SecuritySection