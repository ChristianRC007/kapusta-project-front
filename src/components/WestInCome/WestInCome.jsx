import ButtonChangeCategories from './ButtonChangeCategories'
import West from './West'
import InCome from './InCome'
let isClickChangeCategory = true
 

const WestInCome = () => {
    return (
        <div className="westInCome_container">
            <ButtonChangeCategories />
             { !isClickChangeCategory? <InCome />: <West />}   
        
        </div>
    )
}
export default WestInCome