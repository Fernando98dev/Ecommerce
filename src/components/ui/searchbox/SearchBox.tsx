'use client'
 
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoSearchOutline } from "react-icons/io5";

type FormInputs = {
    Name: string;
  }
  

export const SearchBox = () => {
    const router = useRouter();
    const { handleSubmit } = useForm<FormInputs>({
        defaultValues: {
          
        }
      });
      
      const [query, setQuery] = useState('');
      const searchParams = useSearchParams();
      const { replace } = useRouter();
      
      const onSubmit = () =>{
        
        const params = new URLSearchParams(searchParams);
        if (query) {
            params.set('query', query);
          } else {
            params.delete('query');
            return;
          }

        //console.log(search);
        router.push(`/search?${params.toString()}`);
        
      }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" 
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded-md bg-gray-100"
        defaultValue={searchParams.get('query')?.toString()}
        placeholder='Buscar'
          />
     <button className="mx-2" type="submit">
          <IoSearchOutline className="w-5 h-5" />
        </button>
    </form>
  )
}
 
