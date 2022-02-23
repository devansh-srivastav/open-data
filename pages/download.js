import Head from 'next/head';
import { useState,useEffect } from 'react';
import Popup from '../components/popup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Loader from '../components/loading'
import axios from "axios";

export default function Download() {

    const [arr, setArr] = useState([]) ;
    const [isTrue, settrue] = useState(false);
    //const apiUrl = "http://localhost:3100/api/";
    const apiUrl = "https://opendatabayernbackend.herokuapp.com/api/";
    useEffect(async () => {
        let res = await axios({
            url: apiUrl + "users",
            method: 'get',
           
        }
        ).then((response) => {
            if (response.status == 200) {
                var ans=[];

                for (let i = 0; i < response.data.result.length;i++) {
                    let newarr = response.data.result[i];
                    for (let j = 0; j < newarr.data.length; j++) {

                        let obj = {
                            name: newarr.name,
                            email: newarr.email,
                            org: newarr.org,
                            title: newarr.data[j].title,
                            file: newarr.data[j].file,
                            link: newarr.data[j].link,
                            desc: newarr.data[j].desc,
                            comment: newarr.data[j].comment,
                            keys: newarr.data[j].keywords,
                            license: newarr.data[j].license,
                            type: newarr.data[j].type,
                            id: newarr.data[j].id,
                            category: newarr.data[j].category,
                            date:newarr.data[j].date
                        }
                        ans.push(obj);
                      
                    }
                    
                }
                setArr(ans);
                settrue(true);
            }
        }).catch((err) => {
            router.push("/error")
        })
    },[])

    const router = useRouter();
   
    return (
        <div className="container">
            <Head>
                <title>Open Data Bayern</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {isTrue &&
                    <>
                        <table>
                        <thead>
                            <th>
                                index
                        </th>
                                <th>
                                    email
                        </th>
                                <th>
                                    org
                        </th>
                                <th>
                                    Type
                        </th>
                                <th>
                                    Link
                        </th>
                                <th>
                                    File
                        </th>
                        {/*        <th>*/}
                        {/*            Title*/}
                        {/*</th>*/}
                        {/*        <th>*/}
                        {/*            Desc*/}
                        {/*</th>*/}
                        {/*        <th>*/}
                        {/*            Keywords*/}
                        {/*</th>*/}
                        {/*        <th>*/}
                        {/*            License*/}
                        {/*</th>*/}
                        {/*        <th>*/}
                        {/*            Category*/}
                        {/*</th>*/}
                        {/*        <th>*/}
                        {/*            date*/}
                        {/*</th>*/}
                        {/*        <th>*/}
                        {/*            comment*/}
                        {/*</th>*/}

                            </thead>
                            <tbody>
                            {
                              
                                            arr.map((data, index) => (
                                                < tr key={index} >
                                                    <td>
                                                        {index+1}
                                                    </td>
                                                    <td>
                                                        {data.email}
                                                    </td>
                                                    <td>
                                                        {data.org}
                                                    </td>
                                                    <td>
                                                        {data.type}
                                                    </td>
                                                    <td>
                                                        {data.link}
                                                    </td>
                                                    <td>
                                                        {data.id!="" && data.id!=undefined && <a href={apiUrl + "files/?id=" + data.id} download>{data.file}</a>}
                                                    </td>
                                                    {/*<td>*/}
                                                    {/*    {data.title}*/}
                                                    {/*</td>*/}
                                                    {/*<td>*/}
                                                    {/*    {data.desc}*/}
                                                    {/*</td>*/}
                                                    {/*<td>*/}
                                                    {/*    {data.keys}*/}
                                                    {/*</td>*/}
                                                    {/*<td>*/}
                                                    {/*    {data.license}*/}
                                                    {/*</td>*/}
                                                    {/*<td>*/}
                                                    {/*    {data.category}*/}
                                                    {/*</td>*/}
                                                    {/*<td>*/}
                                                    {/*    {data.date}*/}
                                                    {/*</td>*/}
                                                    {/*<td>*/}
                                                    {/*    {data.comment}*/}
                                                    {/*</td>*/}
                                                </tr>
                                            )
                                                )
                                        }

                                   

                              
                                
                            
                        </tbody>
                        </table>
                    </>
                }
               
            </main>  
        </div>
    );
}