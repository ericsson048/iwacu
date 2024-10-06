"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPerson } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Button } from "./ui/button";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function SetDataClient({ className }: { className?: string; }) {
  const [destination, setDestination] = useState('');
  const [options, setOptions] = useState<{ adult: number; children: number; room: number }>({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name: 'adult' | 'children' | 'room', operation: 'i' | 'd') => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? prev[name] + 1 : prev[name] - 1,
    }));
  };

  const handleSearch = () => {
    console.log('Searching with:', destination, options);
  };

  return (
    <div className={cn("flex items-center  bg-white/85 px-2 py-3 gap-2  justify-between w-full border border-primary text-foreground rounded-lg", className)}>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faBed} />
        <input
          type="text"
          value={destination}
          placeholder="Where are you going?"
          className="border-none outline-none py-2 px-3 "
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div className="w-full">
        <DatePickerWithRange />
      </div>
      <div className="flex items-center gap-2 w-[600px] hover:bg-white/55 py-1 px-3">
        <FontAwesomeIcon icon={faPerson} />
        <Popover>
          <PopoverTrigger asChild>
            <span className="cursor-pointer">
              {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <div className="z-20 bg-background absolute top-0 rounded custom-shadow text-foreground">
              {/* Options pour adultes, enfants, et chambres ici */}
              <div className="w-52 flex justify-between m-2">
                <span>Adult</span>
                <div className="flex items-center gap-2 text-[12px]">
                  <button
                    disabled={options.adult <= 1}
                    className="w-7 h-7 border border-primary text-foreground cursor-pointer bg-primary/40"
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.adult}</span>
                  <button
                    className="w-7 h-7 border border-primary text-foreground cursor-pointer bg-primary/40"
                    onClick={() => handleOption("adult", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-52 flex justify-between m-2">
                <span>Children</span>
                <div className="flex items-center gap-2 text-[12px]">
                  <button
                    disabled={options.children <= 0}
                    className="w-7 h-7 border border-primary text-foreground cursor-pointer bg-primary/40"
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.children}</span>
                  <button
                    className="w-7 h-7 border border-primary text-foreground cursor-pointer bg-primary/40"
                    onClick={() => handleOption("children", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="w-52 flex justify-between m-2">
                <span>Room</span>
                <div className="flex items-center gap-2 text-[12px]">
                  <button
                    disabled={options.room <= 1}
                    className="w-7 h-7 border border-primary text-foreground cursor-pointer bg-primary/40"
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span className="optionCounterNumber">{options.room}</span>
                  <button
                    className="w-7 h-7 border border-primary text-foreground cursor-pointer bg-primary/40"
                    onClick={() => handleOption("room", "i")}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-2">
        <Button className="m-0" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SetDataClient;
