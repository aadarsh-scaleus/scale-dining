"use client";

import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Testimonials() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);
  }, [api, current]);

  let data = [
    {
      id : 1,
      authorName : "John Martin",
      ownedBy : "Owner of Riverbend Bistro" , 
      review : " It has completely transformed how we operate. Managing orders, tables, and staff all from one platform has reduced our workload and made everything run more smoothly."
    },
     {
      id : 2,
      authorName : "Emily Thompson",
      ownedBy : "Manager at Lakeside Grill" , 
      review : "The QR Code menu and payment integration have made a huge difference for us, especially after the pandemic. Customers love the ease, and we’ve seen faster table turnover."
    },
     {
      id : 3,
      authorName : "Michael Scott",
      ownedBy : "Owner of Downtown Eats" , 
      review : "We're able to track every order in real time, keep our menu updated, and quickly manage payments. It's like having an extra set of hands in the restaurant."
    },
  ]
  return (
    <div className="w-full lg:py-20 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
        <p className="mb-4 font-heading font-semibold text-sm text-[var(--para)]  text-center uppercase tracking-px">
        Testimonial
        </p>
        <h2 className=" mb-10 md:mb-16 font-heading font-semibold text-3xl text-[var(--heading)] sm:text-4xl text-center">
          What Restaurant Owners Are Saying

        </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {data.map(({id , authorName , ownedBy , review}) => (
                <CarouselItem className="lg:basis-1/3" key={id}>
                  <div
                    className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <div className="flex flex-col gap-1">
                   
                      <div className="flex flex-col">
                        
                        <p className="text-muted-foreground max-w-xs text-base mb-4">
                          {review}
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center mb-0">
                        <span>By</span>
                        <span>{authorName}</span>
                      </p>
                         <p className="flex flex-row gap-2 text-sm items-center">
                      
                        <span>{ownedBy}</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Testimonials };
