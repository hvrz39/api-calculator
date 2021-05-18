export const signin = async (req, res) => {
    try {
        res.status(200).json('signin')
    } catch(err) {
        res.status(500).json({ error: 'An error ocurred while trying to signing in'});
    }
 }

 export const signup = async (req, res) => {
    try {
  
    } catch(err) {
        res.status(500).json({ error: 'An error ocurred while trying to retrieve users'});
    }
 }