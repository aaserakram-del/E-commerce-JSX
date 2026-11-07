
import HerSec from '../components/HeroSec';
import BrandSec from '../components/BrandSec';
import CardSec from '../components/CardSec';
import CategoriesSec from '../components/CategoriesSec';
import ReviewsSec from '../components/ReviewsSec';
import Newsletter from '../components/Newsletter';


export default function Home() {

    return (
        <>
            {/* Components */}
            {/* Hero Section */}
            <HerSec />
            {/* Section Brand */}
            <BrandSec />
            {/* Section Cards From Api Link */}
            <CardSec/>
            {/* Categories Section */}
            <CategoriesSec  />
            {/* Reviews Section */}
            <ReviewsSec />
            {/* NewSlitter */}
            <Newsletter />
            {/* End */}
        </>
    )
}
