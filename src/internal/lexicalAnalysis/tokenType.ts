export enum TokenType {
    None,
    Tempo,
    Subdivision,

    /**
     * Touch locations (A~E + 1~8) and tap locations (1~8)
     *
     * Takes either only a number (1 ~ 8) or a character (A ~ E) followed by a number (1 ~ 8 for A, B, D, E and 1 or 2 for C)
     */
    Location,

    /**
     * Applies note styles and note types
     */
    Decorator,

    /**
     * Takes a <see cref="SlideType" /> and target vertices
     */
    Slide,

    /**
     * Usually denotes the length of a hold or a <see cref="SlidePath" />
     */
    Duration,

    /**
     * Allows multiple slides to share the same parent note
     */
    SlideJoiner,

    /**
     * Progresses the time by 1 beat
     */
    TimeStep,

    EachDivider,
    EndOfFile
}
