import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'level',
  standalone: true,
})
export class LevelPipe implements PipeTransform {
  transform(value: string): string {
    let variantStyle;
    switch (value) {
      case 'Basic':
        variantStyle = 'bg-[#028595] shadow-[#028595] shadow-sm ';
        break;
      case 'Beginner':
        variantStyle = 'bg-[#1b7f49] shadow-[#1b7f49] shadow-sm';
        break;
      case 'Normal':
        variantStyle = 'bg-[#2c3e98] shadow-[#2c3e98] shadow-sm';
        break;
      case 'Medium':
        variantStyle = 'bg-[#2c3e98] shadow-[#2c3e98] shadow-sm ';
        break;
      case 'Hard':
        variantStyle = 'bg-[#963739] shadow-[#963739] shadow-sm';
        break;
      case 'Advanced':
        variantStyle = 'bg-[#a3662d] shadow-[#a3662d] shadow-sm';
        break;
      case 'Extremal':
        variantStyle = 'bg-[#070f26] shadow-[#070f26] shadow-sm';
        break;
      default:
        variantStyle = 'bg-[#132b32] shadow-[#132b32] shadow-sm';
        break;
    }

    return variantStyle;
  }
}
