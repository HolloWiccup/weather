import { useEffect, useRef, useState } from "react";

interface UseDynamicSVGImportOptions {
  onCompleted?: (
    name: string,
    SvgIcon: React.FC<React.SVGProps<SVGElement>> | undefined
  ) => void;
  onError?: () => void;
}

export function useDynamicSVGImport(
  name: string,
  options: UseDynamicSVGImportOptions = {}
) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { onCompleted, onError } = options;
  useEffect(() => {
    setLoading(true);
    setError(false);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (await import(`../../assets/icons/conditions/${name}.svg`)).default
        onCompleted?.(name, ImportedIconRef.current);
      } catch (err) {
        onError?.();
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name, onCompleted, onError]);

  return { error, loading, SvgIcon: ImportedIconRef.current };
}