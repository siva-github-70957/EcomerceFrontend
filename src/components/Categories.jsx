import React, { useState } from 'react';
export default function Categories({ categories, onChange }) {


    function handleCbClick(ev) {
        const { checked, name } = ev.target;
        if (checked) {
            onChange([...categories, name]);
        }
        else {
            onChange([...categories.filter(selectedName => selectedName !== name)])
        }

    }

    return (
        <>
            <div className="px-1 py-2 flex   xs:items-start lg:items-center gap-5  ">
                <label className=" font-normal text-3xl xs:-mt-1">Category : </label>
                <div className="flex  flex-col lg:flex-row gap-5 ">
                    <div className="flex gap-2 items-baseline">
                        <input type="checkbox" name="bodyCare"
                            onChange={handleCbClick}
                            checked={categories.includes('bodyCare')}
                        />
                        <label className="font-normal text-2xl lg:text-3xl">BodyCare</label>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <input type="checkbox" name="Electronics" checked={categories.includes('Electronics')} onChange={handleCbClick} />
                        <label className="font-normal text-2xl lg:text-3xl">Electronics</label>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <input type="checkbox" name="HomeAndDecor" checked={categories.includes('HomeAndDeceor')} onChange={handleCbClick} />
                        <label className="font-normal text-2xl lg:text-3xl">Home & Decor</label>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <input type="checkbox" name="TvAndAppliances" checked={categories.includes('TvAndAppliances')} onChange={handleCbClick} />
                        <label className="font-normal text-2xl lg:text-3xl">TV & Appliances</label>
                    </div>
                    <div className="flex gap-2 items-baseline">
                        <input type="checkbox" name="sportsAndOthers" checked={categories.includes('sportsAndOthers')} onChange={handleCbClick} />
                        <label className="font-normal text-2xl lg:text-3xl">Sports & Others</label>
                    </div>
                </div>
            </div>
        </>
    )
}