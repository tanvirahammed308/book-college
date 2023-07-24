


// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-1/5 text-center mx-auto">
            <p className="text-yellow-500">*****{subHeading}****</p>
            <h3 className="uppercase border-y-4 mt-2 mb-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;