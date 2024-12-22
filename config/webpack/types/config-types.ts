export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entryPath: string;
    outputPath: string;
    htmlPath: string;
    src: string;
}

export interface BuildOptions {
    paths: BuildPaths;
    mode: BuildMode;
    isDev: boolean;
    port: number;
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}