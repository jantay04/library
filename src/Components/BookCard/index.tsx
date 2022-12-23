import React from 'react'
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
type Props = {
    bookUrl: any,
    name: string,
    author: string
}


function BookCard({ bookUrl, name, author}: Props) {

    const StyledRating = styled(Rating)({
        "& .MuiRating-iconFilled": {
            color: "#FFAA73",
        },
        "& .MuiRating-iconHover": {
            color: "#FF7F2C",
        },
    });

    let [isLike, setLike] = useState(false);

    return (
        <div className="flex flex-col justify-between h-auto w-52">
            <img className="mr-0" src={bookUrl} alt="" />
            <div className="flex justify-between">
                <StyledRating
                    className="mt-2"
                    name="customized-color"
                    defaultValue={2}
                    getLabelText={(value: number) =>
                        `${value} Star${value !== 1 ? "s" : ""}`
                    }
                    precision={0.5}
                // readOnly
                />
                {/* <button className="mr-2" onClick={() => setLike(!isLike)}>
                    {isLike ? (
                        <img src={LikeFill} alt="" />
                    ) : (
                        <img src={Like} alt="" />
                    )}
                </button> */}
            </div>
            <div className='text-ourBlue font-bold'>
                <p>{name}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default BookCard

function useState(arg0: boolean): [any, any] {
    throw new Error('Function not implemented.');
}
