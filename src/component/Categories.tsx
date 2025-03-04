import {DATABASE} from "@/src/data/data";
import Image from "next/image";
import {MdArrowBackIosNew} from "react-icons/md";
import Link from "next/link";

const Categories = () => {
    return (
        <div className="categories-container">
            <div className="categories-title">{'دسته بندی ها'}</div>
            <div className="category-grid">
                {DATABASE.cats.map(cat => (
                    <div className="category-item" key={cat.id}>
                        <Link href={`/category/${cat.id}`}>
                            <div className="category-card">
                                <Image src={cat.img} alt={cat.title} width={100} height={100}
                                       style={{width: '100%', height: '100%', borderRadius: '12px'}}/>
                                <div className="category-badge">
                                    {cat.title}
                                    <MdArrowBackIosNew
                                        style={{color: '#ff00a6', marginRight: '8px', marginTop: '2px'}}/>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Categories;
