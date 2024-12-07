import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
} from '@/components/ui/select';
import { SelectItem } from '@radix-ui/react-select';
import { useSelectSorting } from '../hooks/useSelectSorting';

const SortByGroups: string[] = ['price', 'rate', 'count'];

export default function SortBy() {
  const { onSelect, queries } = useSelectSorting();

  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className='w-fit bg-primary text-secondary'>
        <p>{`${queries.get('sort_by') || 'Select'} ${
          queries.get('sort_type') || 'Sort'
        }`}</p>
      </SelectTrigger>
      <SelectContent className='w-fit'>
        <SelectGroup>
          <SelectLabel>Sort By:</SelectLabel>
          {SortByGroups.map((s: string, _: number) => (
            <>
              <SelectItem
                key={Math.random()}
                value={`${s}_desc`}
                className='outline-none hover:ring-0 hover:bg-foreground/20 px-2 rounded-sm'
              >
                {s} desc
              </SelectItem>
              <SelectItem
                key={Math.random()}
                value={`${s}_asc`}
                className='outline-none hover:ring-0 hover:bg-foreground/20 px-2 rounded-sm'
              >
                {s} asc
              </SelectItem>
            </>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
