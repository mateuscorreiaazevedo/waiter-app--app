import { ImageBackground, TouchableOpacity } from 'react-native';
import { ACTIVE_OPACITY, Close } from '../../../shared';
import { setUriImagePath } from '../../util/set-uri-image-path-helper';

interface ProductModalImageHeroProps {
  onClose: VoidFunction;
  imagePath: string;
}

export function ProductModalImageHero({
  onClose,
  imagePath,
}: ProductModalImageHeroProps) {
  return (
    <ImageBackground
      className="h-[200px] items-end p-6"
      source={{ uri: setUriImagePath(imagePath) }}
    >
      <TouchableOpacity
        activeOpacity={ACTIVE_OPACITY}
        className="size-8 items-center justify-center rounded-full bg-black/50"
        onPress={onClose}
      >
        <Close />
      </TouchableOpacity>
    </ImageBackground>
  );
}
